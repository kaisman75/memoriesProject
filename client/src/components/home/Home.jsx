
import React,{useState,useEffect} from "react";
import {useDispatch} from "react-redux";
import {Container,Grow, Grid} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import {getPosts,}from"../../actions/posts"

 const Home = () => {
    const [currentID,setCurrentID]=useState(null);
    const dispatch = useDispatch();
    //const classes=useStyles();
    useEffect(()=>{
      dispatch(getPosts())
    },[currentID,dispatch])
  return (
    <Grow in>
    <Container>
      <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
          <Posts  setCurrentID={setCurrentID}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form currentID={currentID} setCurrentID={setCurrentID}/>
        </Grid>
      </Grid>
    </Container>
  </Grow>
  )
}

export default Home;