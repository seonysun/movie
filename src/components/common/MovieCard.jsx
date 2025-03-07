import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <li className="border" onClick={() => navigate(`/details/${movie.id}`)}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="w-[200px] h-[300px]"
      />
      <div className="p-2">
        <p>{movie.title}</p>
        <p className="text-end">⭐️ {movie.vote_average}</p>
      </div>
    </li>
  );
};

export default MovieCard;
