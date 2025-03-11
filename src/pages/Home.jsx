import MovieCard from "../components/common/MovieCard";
import CardFallback from "../components/common/CardFallback";
import MovieSwipe from "../components/common/MovieSwipe";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: topData, loading: topLoading } = useFetch("movie/top_rated");
  const { data: popularData, loading: popularLoading } =
    useFetch("movie/popular");

  if (topLoading || popularLoading) return <CardFallback num={12} />;

  return (
    <>
      <MovieSwipe movieList={topData.results} />
      <ul className="flex flex-wrap mt-4 justify-center gap-4">
        {popularData.results
          ?.filter((el) => el.adult === false)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </ul>
    </>
  );
};

export default Home;
