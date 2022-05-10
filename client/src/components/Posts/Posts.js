import React from "react"
import useStyles from"./styles"
import { useSelector } from 'react-redux'
import Spinner from "react-spinkit"
import Post from "./post/post"
import{Grid} from '@material-ui/core'


const Posts = ({setCurrentID}) => {
const posts =useSelector(state=>state.posts);
const classes=useStyles();



  return (
  !posts? <Spinner name="cube-grid" color="red" className={classes.Spinner}/>:(
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      
     {posts.map((post)=>{
       
        return(
          <Grid key={post._id} item xs={12} sm={6} md={6}> 
          <Post post={post}  setCurrentID={setCurrentID}/>
          </Grid>
         
          
        )
   }
  
   )
  }
   </Grid>
  )
  )     
    
  
  
}

export default Posts