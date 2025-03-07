import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../../constants/config.js";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/details/${movie.id}`)}>
      <img
        src={`${IMG_URL}w200${movie.poster_path}`}
        alt={movie.title}
        className="w-[200px] h-[300px] transition-transform duration-300 hover:scale-105"
      />
      <div className="p-2">
        <p>{movie.title}</p>
        <p className="text-end">⭐️ {movie.vote_average.toFixed(2)}</p>
      </div>
    </li>
  );
};

export default MovieCard;
