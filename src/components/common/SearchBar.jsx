import useDebouncedValue from "../../hooks/useDebouncedValue";
import { API_URL, IMG_URL } from "../../constants/config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../../hooks/useFetch";

const SearchBar = ({ inputValue, setInputValue, setIsSearchOpen }) => {
  const navigate = useNavigate();

  const debouncedInput = useDebouncedValue(inputValue, 500);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${API_URL}search/movie?query=${debouncedInput}`,
        options
      );
      setData(response.data);
    };
    fetchData();
  }, [debouncedInput]);

  return (
    <ul className="flex gap-2">
      {data.results?.length > 0 ? (
        data.results
          .filter((el) => el.adult === false)
          .map((movie) => (
            <li
              key={movie.id}
              onMouseDown={() => {
                navigate(`/details/${movie.id}`);
                setInputValue("");
                setIsSearchOpen(false);
              }}
              className="cursor-pointer w-32 flex-shrink-0"
            >
              <div className="overflow-hidden w-full rounded-lg">
                <img
                  src={`${IMG_URL}original${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-48 transition-transform duration-300 hover:scale-110"
                />
              </div>
            </li>
          ))
      ) : (
        <p>검색 결과가 없습니다</p>
      )}
    </ul>
  );
};

export default SearchBar;
