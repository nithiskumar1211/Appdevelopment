import React, { useState } from "react";
import "./assets/css/App.css"
import Login from "./pages/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Signup from'./pages/Signup'
function App() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    )
  }

export default App;
