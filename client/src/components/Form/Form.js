import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector}from 'react-redux'
import FileBase from 'react-file-base64'
import makeStyles from"./Styles.js"
import { TextField,Button,Typography,Paper } from '@material-ui/core'
import { createPost, updatePost} from '../../actions/posts.js'

const Form = ({currentID,setCurrentID}) => {

  const dispatch=useDispatch();
  const post=useSelector((state)=>(currentID?state.posts.find((p)=>p._id===currentID):null))
  const [postData,setPostData]=useState({
    creator:'', title:'', message:'', tags:'', selectedFile:'',likeCount:0
  })
   const clear=()=>{
     setCurrentID(0)
      setPostData({ creator:'', title:'', message:'', tags:'', seletedFile:''})}
    const classes = makeStyles()
   
     useEffect(()=>{
      if(post)setPostData(post)
    },[post])
   
   const handleSubmit=(e)=>{
      e.preventDefault();
      if (currentID === 0) {
        dispatch(createPost(postData));
        clear();

      } else {
       
        dispatch(updatePost(currentID, postData));
        clear();
      }
      
    } 
   
  
  return (
   <Paper className={classes.paper}>
      <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate >
            <Typography variant="h6">Creating Memorie</Typography>
            <TextField name="creator" style={{marginBottom:"10px"}} label="Creator" variant="outlined" value={postData.creator}  fullWidth onChange={e=> setPostData({...postData,creator:e.target.value})}/>
            <TextField name="title" style={{marginBottom:"10px"}} label="title" variant="outlined" value={postData.title}  fullWidth onChange={e=> setPostData({...postData,title:e.target.value})}/>
            <TextField  name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
            <TextField name="tags" style={{marginBottom:"10px"}} label="tags" variant="outlined" value={postData.tags}  fullWidth onChange={e=> setPostData({...postData,tags:e.target.value})}/>

            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile: base64 })}/></div>

            <Button style={{marginBottom:"10px"}} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleSubmit}>Submit</Button>
            <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
   </Paper>
)
}

export default Form