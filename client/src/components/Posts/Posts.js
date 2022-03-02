import React from "react"
import useStyles from"./styles"
import { useSelector } from 'react-redux'
import Spinner from "react-spinkit"
import Post from "./post/post"
import{Grid} from '@material-ui/core'

const Posts = () => {
const data =useSelector(state=>state.posts.data );
const classes=useStyles();
console.log(data);


  return (
  !data? <Spinner name="cube-grid" color="red" className={classes.Spinner}/>:
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      
     { data.map((e)=>{
       
        return(
          <Grid key={e._id} item xs={12} sm={6} md={6}> 
          <Post post={e} />
          </Grid>
         
          
        )
   }
  
   )
  }
   </Grid>
  
  )     
    
  
  
}

export default Posts