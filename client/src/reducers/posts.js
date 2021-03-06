import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, DISLIKE} from '../constants/ActionTypes';

 export  const posts=(posts=[] ,action)=>{
 switch(action.type){
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case FETCH_ALL:
        return action.payload;
    case CREATE:
      return  [...posts,action.payload] ;  
    case DELETE:
      return posts.filter((post)=>post._id!==action.payload)  ;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post)); 
    case DISLIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post)); 
     default:
        return posts
 };

}

 
