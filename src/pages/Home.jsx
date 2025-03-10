import { useState } from "react";
import MovieCard from "../components/common/MovieCard";
import MovieSwipe from "../components/common/MovieSwipe";
import movieListData from "../assets/movieListData.json";

const Home = () => {
  const [movieList] = useState(movieListData);

  return (
    <>
      <MovieSwipe movieList={movieList} />
      <ul className="flex flex-wrap mt-4 justify-center gap-4">
        {movieList.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default Home;
