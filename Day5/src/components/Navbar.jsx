import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Blog</h2>

      <div className="nav-links">
        <Link to="/blogs">Blogs</Link>
        <Link to="/createblog">Create Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;