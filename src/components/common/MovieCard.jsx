import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../../constants/config.js";
import FavoriteButton from "./FavoriteButton.jsx";

const MovieCard = memo(({ movie }) => {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`/details/${movie.id}`)}
      className="relative cursor-pointer group w-[200px]"
    >
      <span className="absolute top-2 right-2 z-10">
        <FavoriteButton id={movie.id} />
      </span>
      <div className="overflow-hidden h-[300px] rounded-lg">
        <img
          src={`${IMG_URL}original${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="w-[200px] h-[300px] rounded-lg text-white font-bold flex items-center transition-opacity justify-center bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
        보러가기
      </div>
      <div className="p-2">
        <p className="text-xl font-semibold">{movie.title}</p>
        <p className="text-end text-lg">⭐️ {movie.vote_average.toFixed(2)}</p>
      </div>
    </li>
  );
});

export default MovieCard;
