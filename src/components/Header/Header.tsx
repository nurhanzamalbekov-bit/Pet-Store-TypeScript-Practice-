import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Home from "../../pages/Home/Home";
import Categories from "../../pages/Categories/Categories";
import CategoriesDetails from "../../pages/Category-details/CategoryDetails";

const Header = () => {
  return (
    <header>
      <h1>Hello is my third site </h1>
      <a
        href="https://github.com/nurhanzamalbekov-bit?tab=repositories"
        target="blank"
      >
        <h2>it's my github</h2>
      </a>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/CategoriesDetails" element={<CategoriesDetails/>} />
      </Routes>
    </header>
  );
};

export default Header;
