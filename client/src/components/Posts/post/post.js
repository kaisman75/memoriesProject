import * as React from 'react';
import{Card,CardContent,CardMedia,Typography}  from '@material-ui/core';
import FileBase from "react-file-base64"


 const  Mediacard = ({name,image}) =>{
  
  return (
    <Card sx={{ Width: 200 }}>
      <CardMedia className="cardImg"
        component="img"
        height="200"
        src= {image.base64}
        alt={image.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
    </Card>
  );
}
export default Mediacard