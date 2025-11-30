import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Categories from "../../pages/Categories";
import CategoriesDetails from "../../pages/Category-details";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/CategoriesDetails" element={<CategoriesDetails />} />
    </Routes>
  );
};

export default Navigation;
