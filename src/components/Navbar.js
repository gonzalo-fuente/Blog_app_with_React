import { Link } from "react-router-dom";
import frenchFlag from '../img/france.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={ frenchFlag } alt="French flag" width="20px"/>
      <h1>Le Blog Français</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className="btn">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;