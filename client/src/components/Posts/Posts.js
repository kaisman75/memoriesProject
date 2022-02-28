import React from "react"
import useStyles from"./styles"
import { useSelector } from 'react-redux'
import Spinner from "react-spinkit"
import Post from "./post/post"
import{Grid} from '@material-ui/core'

const Posts = () => {
const data =useSelector(posts=>posts.posts.data);
const classes=useStyles();
console.log(data);


  return (
  !data? <Spinner name="cube-grid" color="red" className={classes.Spinner}/>:
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      
     { data.map((e)=>{
         const {_id,creator,message,selectedFile,tags,title,createdAt} = e;
       
        return(
          <Grid key={_id} item xs={12} sm={6} md={6}> 
          <Post _id={_id} name={creator} image={selectedFile.base64} title={title}createdAt={createdAt} />
          </Grid>
         
          
        )
   }
  
   )
  }
   </Grid>
  
  )     
    
  
  
}

export default Posts