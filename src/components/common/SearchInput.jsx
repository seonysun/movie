import { useNavigate } from "react-router-dom";
import { Search } from "../../assets/icons";

function SearchInput({
  message = "검색어를 입력하세요",
  setIsSearchOpen,
  inputValue,
  setInputValue,
}) {
  const navigate = useNavigate();

  const searchSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    navigate(`/search?movie=${inputValue}`);
    setInputValue("");
    setIsSearchOpen(false);
  };

  return (
    <form
      className={`flex w-full items-center gap-2 rounded-lg bg-[#F5F5F5] p-3`}
      onSubmit={searchSubmit}
    >
      <button type="submit">
        <img src={Search} alt="search icon" />
      </button>
      <input
        className="w-full bg-transparent outline-none text-black"
        placeholder={message}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsSearchOpen(e.target.value.trim() !== "");
        }}
      />
    </form>
  );
}

export default SearchInput;
