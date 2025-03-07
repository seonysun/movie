import { useParams } from "react-router-dom";
import movieDetailData from "../assets/movieDetailData.json";
import { useState } from "react";
import { IMG_URL } from "../constants/config.js";
import MovieDetail from "../components/common/MovieDetail.jsx";

const Detail = () => {
  const selectedId = useParams().id;
  const [movie] = useState(movieDetailData);

  return (
    <main className="pb-8 px-16 text-white">
      <img
        src={`${IMG_URL}original${movie.backdrop_path}`}
        alt="background image"
        className="absolute left-0 blur -z-10"
      />
      <MovieDetail movie={movie} />
    </main>
  );
};

export default Detail;
