import React from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./pages/Feed";
import { Box, Stack, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Page_11 from "./pages/Page_11";
import Page_12 from "./pages/Page_12";
import Page_13 from "./pages/Page_13";
import Page_14 from "./pages/Page_14";
import Page_15 from "./pages/Page_15";
import Page_16 from "./pages/Page_16";
import Page_21 from "./pages/Page_21";
import Page_22 from "./pages/Page_22";
import Page_23 from "./pages/Page_23";

function App() {
  return (
      <Container>
        <Navbar />
        <Stack  direction="row" spacing={2} justifyContent="space-between">
     
          <Routes>
            <Route path = "/" element= {<Main/>} />
            <Route path = "/about" element= {<>about</>} />
            <Route path = "/page/1.1" element= { <Page_11 /> } />
            <Route path = "/page/1.2" element= { <Page_12 /> } />
            <Route path = "/page/1.3" element= { <Page_13 /> } />
            <Route path = "/page/1.4" element= { <Page_14 /> } />
            <Route path = "/page/1.5" element= { <Page_15 /> } />
            <Route path = "/page/1.6" element= { <Page_16 /> } />
            <Route path = "/page/2.1" element= { <Page_21 /> } />
            <Route path = "/page/2.2" element= { <Page_22 /> } />
            <Route path = "/page/2.3" element= { <Page_23 /> } />
          </Routes>
        </Stack> 
        
    </Container>
  );
}

export default App;
