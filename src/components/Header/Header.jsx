import React from "react";
import { Routes, Route } from "react-router-dom";

const Header = () => {
    
    return(
        <header>
        <h1>Hello is my third site </h1>
        <a href="https://github.com/nurhanzamalbekov-bit?tab=repositories" target="blank"><h2>it's my github</h2></a>
         
         
         <Routes>
             <Route path="/categories" element={<categories/>}/>
         </Routes>
        </header>
    )


}

export default Header