import React from 'react'
import useStyles from"./styles"
import Post from './post/post'
import { useSelector } from 'react-redux'
const Posts = () => {
const data =useSelector(state=>state.posts)
  const classes=useStyles()
  console.log(data)
  return (
    <div>
      <Post />
    </div>
  )
}

export default Posts