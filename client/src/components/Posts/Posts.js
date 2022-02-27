import React from "react"
import useStyles from"./styles"
import { useSelector } from 'react-redux'
import Spinner from "react-spinkit"
import Mediacard from "./post/post"

const Posts = () => {
const data =useSelector(posts=>posts.posts.data)
const classes=useStyles()
console.log(data)


  return (
  
    !data?<Spinner name="cube-grid" color="red"/>:
     
    data.map((e)=>{

        const{creator,message,selectedFile,tags,title} = e;
        return(
          <Mediacard  name={creator} image={selectedFile} />
        )
     }
    
  )
  )
}
export default Posts