import React from 'react'
import{ AppBar, Typography,Toolbar,Button,Avatar} from "@material-ui/core"
import useStyles from "./styles";
import memories from "../../images/memories.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes=useStyles();
    const user=null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
    <div className={classes.BrandContainer}>
    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography> 
    <img className={classes.image} src={memories} alt="icon" height="60" />
    </div>
    <Toolbar className={classes.Toolbar}>
        
        {  user?(
        <div className={classes.profile}>
            <Avatar className={classes.purple} alt="" src=""/>
            <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary">LOGOUT</Button>
        </div> 
        ):
        ( <Button component={Link} to="/Auth" variant="contained" color="primary">SignIn</Button>)}    
                   
    </Toolbar>
  </AppBar>

  )
}




export default Navbar