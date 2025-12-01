import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/Categories">Categorie's</Link>
        <Link to="/CategoriesDetails">/Categorie's details</Link>
    </nav>
  );
};

export default Navigation;
