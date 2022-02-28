import * as React from 'react';
import{Button,Card,CardMedia,Typography}  from '@material-ui/core';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import useStyle from "./styles"
import moment from "moment"


 const Post = ({_id,name,image,title,createdAt}) =>{
  const classes=useStyle()
  
  
  return (
   
   
    <Card className={classes.Card}>
      <CardMedia className={classes.media}
      image ={image}
      title={title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() =>{}}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      
    </Card>
    
   
  );
}
export default Post