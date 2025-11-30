import { Link } from "react-router-dom";
import s from "./navigation.module.css"

const Navigation = () => {
  return (
    <nav className={s.container}>
        <Link to="/Home">Home</Link>
        <Link to="/Categories">Categorie's</Link>
        <Link to="/CategoriesDetails">/Categorie's details</Link>
    </nav>
   
  );
};

export default Navigation;
