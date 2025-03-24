import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../../constants/config.js";
import FavoriteButton from "./FavoriteButton.jsx";
import useLazyImage from "../../hooks/useLazyImage.js";

const MovieCard = memo(({ movie }) => {
  const navigate = useNavigate();
  const imgRef = useLazyImage();

  return (
    <li
      onClick={() => navigate(`/details/${movie.id}`)}
      className="relative cursor-pointer group w-[47%] md:w-[23%]"
    >
      <span className="absolute top-2 right-2 z-10">
        <FavoriteButton id={movie.id} />
      </span>
      <div className="overflow-hidden rounded-lg aspect-[2/3]">
        <img
          ref={imgRef}
          src="/src/assets/images/defaultImg.png"
          data-src={`${IMG_URL}w500${movie.poster_path}`}
          alt={movie.title}
          onError={(e) => {
            if (!e.currentTarget.dataset.failed) {
              e.currentTarget.dataset.failed = true;
              e.currentTarget.src = "/src/assets/images/defaultImg.png";
            }
          }}
          className="w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="w-full aspect-[2/3] rounded-lg text-white font-bold flex items-center transition-opacity justify-center bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100">
          보러가기
        </div>
      </div>
      <div className="flex h-[100px] flex-col justify-between p-2">
        <p className="text-xl font-semibold line-clamp-2">{movie.title}</p>
        <p className="text-end text-lg">⭐️ {movie.vote_average.toFixed(2)}</p>
      </div>
    </li>
  );
});

export default MovieCard;
