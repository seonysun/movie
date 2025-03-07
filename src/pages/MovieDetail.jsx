import { useParams } from "react-router-dom";
import movieDetailData from "../assets/movieDetailData.json";
import { useState } from "react";
import { IMG_URL } from "../constants/config.js";

const MovieDetail = () => {
  const selectedId = useParams().id;
  const [movie] = useState(movieDetailData);

  return (
    <section className="pt-8 px-16">
      <div className="mb-3 pb-2 border-b">
        <div className="text-2xl font-semibold">{movie.title}</div>
        <div className="flex justify-between">
          <span>{movie.tagline}</span>
          <span className="font-medium">⭐️ {movie.vote_average}</span>
        </div>
      </div>
      <div className="flex gap-5">
        <img src={`${IMG_URL}w300${movie.poster_path}`} />
        <div className="flex flex-col gap-3">
          <p>개봉일자 : {movie.release_date}</p>
          <ul className="flex gap-2">
            {movie.genres.map((genre) => (
              <li className="rounded-lg px-2 py-1 bg-yellow-200 dark:bg-yellow-600">
                {genre.name}
              </li>
            ))}
          </ul>
          <p className="text-justify">{movie.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
