import React,{useState,useEffect} from "react";
import {useDispatch} from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from "./Styles";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import {getPosts,}from"./actions/posts"
function App() {
  const [currentID,setCurrentID]=useState(null);
  const dispatch = useDispatch();
  const classes=useStyles();
  useEffect(()=>{
    dispatch(getPosts())
  },[currentID,dispatch])

  return (

    < Container maxWidth="lg" >
     
     <Navbar />
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

    </Container>
    
  );
}

export default App;
