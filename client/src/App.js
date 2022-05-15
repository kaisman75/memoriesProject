import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Container } from '@material-ui/core';
import Home from "./components/home/Home"
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Auth from "./components/Auth/Auth";

function App() {
 

  return (
<BrowserRouter>
    < Container maxWidth="lg" >
     <Navbar />
     <Routes>
     <Route path="/" exact element={<Home />} />
     <Route path="/Auth"  element={<Auth />} />
     </Routes>
    </Container>
</BrowserRouter>    
  );
}

export default App;
