import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="brand">
        <Link to="/">RASYIDEV</Link>
      </div>
      <nav>
        <Link to="/create">New Blog</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/contacts">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
