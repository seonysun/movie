import { Link } from "react-router-dom";
import ToggleButton from "./common/ToggleButton";
import SearchInput from "./common/SearchInput";
import SearchBar from "./common/SearchBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "../redux/modalSlice";
import SideModal from "./SideModal";
import { Like } from "../assets/icons";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const dispatch = useDispatch();
  const { isOpen, modalType, modalProps } = useSelector((state) => state.modal);

  return (
    <>
      {isOpen && modalType === "side" && (
        <SideModal
          setIsOpen={() => dispatch(modalSlice.actions.closeModal())}
          {...modalProps}
        />
      )}
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
          <img
            src={Like}
            onClick={() =>
              dispatch(
                modalSlice.actions.openModal({
                  modalType: "side",
                  modalProps: {
                    title: "찜한 영화 목록",
                    direction: "right",
                    // itemList: likeList,
                  },
                })
              )
            }
          />
          <ToggleButton />
        </div>
      </header>
      {isSearchOpen && (
        <div className="absolute left-0 overflow-x-auto min-w-full max-w-full p-4 z-50 backdrop-blur-md">
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
