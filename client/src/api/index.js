import axios from "axios"
 const url="http://localhost:5000/posts";

  export const fetchPosts = ()=>axios.get(url);
  export const creatPost  =  (newPost)=>axios.post(url,newPost);
  export const updatePost= (id,newUpdate)=>axios.patch(`${url}/${id}`,newUpdate)
  //export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);