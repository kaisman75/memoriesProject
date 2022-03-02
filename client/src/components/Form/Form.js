import React,{useState} from 'react'
import {useDispatch}from 'react-redux'
import FileBase64 from "react-file-base64"
import makeStyles from"./Styles.js"
import { TextField,Button,Typography,Paper } from '@material-ui/core'
import { createPost } from '../../actions/posts.js'

const Form = () => {
  const dispatch=useDispatch()
  const [postData,setPostData]=useState({
    creator:'', title:'', message:'', tags:'', selectedFile:''
  })
    const classes = makeStyles()
    const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(createPost(postData))
      

    } 
    const clear=()=>{ setPostData({ creator:'', title:'', message:'', tags:'', seletedFile:''})}
    
  return (
   <Paper className={classes.paper}>
      <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate >
            <Typography variant="h6">Creating Memorie</Typography>
            <TextField name="creator" style={{marginBottom:"10px"}} label="Creator" variant="outlined" value={postData.creator}  fullWidth onChange={e=> setPostData({...postData,creator:e.target.value})}/>
            <TextField name="title" style={{marginBottom:"10px"}} label="title" variant="outlined" value={postData.title}  fullWidth onChange={e=> setPostData({...postData,title:e.target.value})}/>
            <TextField name="message" style={{marginBottom:"10px"}} label="message" variant="outlined" value={postData.message}  fullWidth onChange={e=> setPostData({...postData,message:e.target.value})}/>
            <TextField name="tags" style={{marginBottom:"10px"}} label="tags" variant="outlined" value={postData.tags}  fullWidth onChange={e=> setPostData({...postData,tags:e.target.value})}/>

            <div className={classes.fileInput}><FileBase64 type="file" multiple={false} onDone={(base64)=>{setPostData({...postData,selectedFile:base64})}}/></div>

            <Button style={{marginBottom:"10px"}} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleSubmit}>Submit</Button>
            <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
   </Paper>
)
}

export default Form