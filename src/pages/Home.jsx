import MovieCard from "../components/common/MovieCard";
import CardFallback from "../components/common/CardFallback";
import MovieSwipe from "../components/common/MovieSwipe";
import useFetch from "../hooks/useFetch";

const MOVIE_TOP_RATED = "top_rated";
const MOVIE_POPULAR = "popular";

const Home = () => {
  const { data: topData, loading: topLoading } = useFetch(MOVIE_TOP_RATED);
  const topMovieList = topData?.results || [];

  const { data: popularData, loading: popularLoading } =
    useFetch(MOVIE_POPULAR);
  const popularMovieList =
    popularData?.results.filter((el) => el.adult === false) || [];

  if (topLoading || popularLoading) return <CardFallback num={12} />;

  return (
    <>
      <MovieSwipe movieList={topMovieList} />
      <ul className="flex flex-wrap mt-4 justify-center gap-4">
        {popularMovieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default Home;
