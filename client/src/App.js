import react from "react"
import './App.css';
import{AppBar,Container,Grid,Grow,Typography} from "@material-ui/core"
import memories from "./images/memories.png"
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  return (
   <Container maxwidth="lg">
     <AppBar position="static" color="inherit">
       <Typography variant="h2" align="center">Memories</Typography>
       <Typography variant="img" align="center"> <img src={memories} alt="memories" height="60" width={60} /></Typography>
     </AppBar>
     <Grow in>
       <Container>
         <Grid container justify="space-between" align-items="stretch" spacing={3}>
                <Grid item xs={12} sm={7}><Posts/></Grid>
                <Grid item xs={12} sm={4}><Form/></Grid>
         </Grid>
       </Container>
     </Grow>
   </Container>
  );
}

export default App;
