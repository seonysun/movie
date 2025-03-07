import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border-b mb-4 p-4 h-[88px]">
      <Link to="/">
        <span>My Movie</span>
      </Link>
    </nav>
  );
};

export default Navbar;
