import React from 'react'
import useStyles  from "./styles"
const Post = ({data}) => {
    const classes =useStyles()
  return (
   
      <div>
      {data}
    </div>

)}

export default Post