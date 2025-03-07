import { useParams } from "react-router-dom";
import movieDetailData from "../assets/movieDetailData.json";
import { useState } from "react";
import { IMG_URL } from "../constants/config.js";

const MovieDetail = () => {
  const selectedId = useParams().id;
  const [movie] = useState(movieDetailData);

  return (
    <main className="pb-8 px-16 text-white">
      <img
        src={`${IMG_URL}original${movie.backdrop_path}`}
        alt="background image"
        className="absolute left-0 blur -z-10"
      />
      <div className="mb-3 pt-8 pb-2 border-b">
        <div className="text-4xl font-semibold">{movie.title}</div>
        <div className="text-lg flex justify-between">
          <span>{movie.tagline}</span>
          <span className="font-medium">
            ⭐️ {movie.vote_average.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="flex gap-5">
        <img
          src={`${IMG_URL}original${movie.poster_path}`}
          alt={movie.title}
          className="w-1/2"
        />
        <div className="flex flex-col gap-3">
          <p className="text-lg">🍿 개봉 : {movie.release_date}</p>
          <ul className="flex gap-2 text-black">
            {movie.genres.map((genre) => (
              <li className="rounded-lg px-2 py-1 bg-yellow-200 hover:bg-yellow-400 ">
                {genre.name}
              </li>
            ))}
          </ul>
          <p className="text-justify">{movie.overview}</p>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;
