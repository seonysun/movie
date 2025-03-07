import { Link } from "react-router-dom";
import ToggleButton from "./common/ToggleButton";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center  p-4 h-[88px]">
      <Link to="/">
        <span className="text-xl font-semibold">My Movie</span>
      </Link>
      <ToggleButton />
    </header>
  );
};

export default Navbar;
