import { IMG_URL } from "../../constants/config.js";
import FavoriteButton from "./FavoriteButton.jsx";

const MovieDetail = ({ movie }) => {
  return (
    <section>
      <div className="mb-3 pt-8 pb-2 border-b">
        <div className="text-4xl font-semibold flex items-center gap-3">
          <span>{movie.title}</span>
          <FavoriteButton id={movie.id} />
        </div>
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
          <p className="text-lg font-semibold">🍿 {movie.release_date}</p>
          <ul className="flex gap-2 text-black">
            {movie.genres.map((genre, idx) => (
              <li
                key={idx}
                className="rounded-lg px-2 py-1 font-semibold bg-yellow-200 hover:bg-yellow-400 "
              >
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
