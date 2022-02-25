import Axios from "axios"

  export const fetchPosts = Axios.get("http://localhost:5000/posts");
 