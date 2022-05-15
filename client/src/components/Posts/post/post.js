import * as React from 'react';
import { useDispatch } from 'react-redux';
import{Card, CardActions, CardContent, CardMedia, Button, Typography}  from '@material-ui/core';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyle from "./styles"
import moment from "moment"
import { likePost, deletePost ,disLikePost} from '../../../actions/posts';


 const Post = ({post,setCurrentID}) =>{
  const classes=useStyle()
  const {_id,tags,title,selectedFile,creator,createdAt,message,likeCount} = post;
 const dispatch=useDispatch();


  
  return (
   
   
    <Card className={classes.card}>
    <CardMedia className={classes.media} image={selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
    <div className={classes.overlay}>

   
      <Typography variant="h6">{creator}</Typography>
   

      <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>

    </div>
    <div className={classes.overlay2}>
      <Button style={{ color: 'white' }} size="small" onClick={() => {setCurrentID(_id)}}><MoreHorizIcon fontSize="default" /></Button>
    </div>
    <div className={classes.details}>
      <Typography variant="body2" color="textSecondary" component="h2">{tags.map((tag) => `#${tag} `)}</Typography>
    </div>
    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{title}</Typography>
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{message}</Typography>
    </CardContent>
    <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" onClick={() => dispatch(likePost(_id))}> <ThumbUpAltIcon fontSize="small" /> </Button>  <span>{likeCount}</span> < Button size="small" color="primary"  onClick={() => dispatch(disLikePost(_id))}><ThumbDownIcon fontSize="small"/>   </Button>
      <Button size="small" color="primary" onClick={() => dispatch(deletePost(_id))}><DeleteIcon fontSize="small" /> Delete</Button>
    </CardActions>
  </Card>
    
   
  );
}
export default Post