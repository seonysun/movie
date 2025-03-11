import { Link } from "react-router-dom";
import ToggleButton from "./common/ToggleButton";
import SearchInput from "./common/SearchInput";
import SearchBar from "./common/SearchBar";
import { useState } from "react";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-4 h-[88px]">
        <Link to="/">
          <span className="text-4xl font-semibold">My Movie</span>
        </Link>
        <div className="flex items-center gap-3 w-2/5">
          <SearchInput
            setIsSearchOpen={setIsSearchOpen}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <ToggleButton />
        </div>
      </header>
      {isSearchOpen && (
        <div className="absolute overflow-x-auto min-w-full p-4 z-50 bg-white dark:bg-dark-main">
          <SearchBar
            setIsSearchOpen={setIsSearchOpen}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
