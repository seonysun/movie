import { useState } from "react";
import MovieCard from "../components/common/MovieCard";
import movieListData from "../assets/movieListData.json";

const Home = () => {
  const [movieData] = useState(movieListData);

  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {movieData.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default Home;
