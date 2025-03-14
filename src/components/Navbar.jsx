import { Link, useNavigate } from "react-router-dom";
import ToggleButton from "./common/ToggleButton";
import SearchInput from "./common/SearchInput";
import SearchBar from "./common/SearchBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "../redux/modalSlice";
import SideModal from "./SideModal";
import useResize from "../hooks/useResize";
import { User, Like } from "../assets/icons";

const Navbar = () => {
  const isMobile = useResize();

  const [inputValue, setInputValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const dispatch = useDispatch();
  const { isOpen, modalType, modalProps } = useSelector((state) => state.modal);

  const navigate = useNavigate();

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
          <span className="text-4xl font-semibold mx-2">My Movie</span>
        </Link>
        <div className={`w-2/5 ${isMobile ? "hidden" : "block"}`}>
          <SearchInput
            setIsSearchOpen={setIsSearchOpen}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
        <div className="flex items-center gap-3">
          <img
            src={Like}
            onClick={() =>
              dispatch(
                modalSlice.actions.openModal({
                  modalType: "side",
                  modalProps: {
                    title: "찜한 영화 목록",
                    direction: "right",
                  },
                })
              )
            }
            className="cursor-pointer"
          />
          <img
            src={User}
            onClick={() => navigate("/signin")}
            className="cursor-pointer"
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
