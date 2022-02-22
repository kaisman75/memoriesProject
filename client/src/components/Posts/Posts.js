import React from 'react'
import useStyles from"./styles"
import Post from './post/post'

const Posts = () => {
  const classes=useStyles()
  return (
    <div>
      <Post/>
    </div>
  )
}

export default Posts