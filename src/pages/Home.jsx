import MovieCard from "../components/common/MovieCard";
import CardFallback from "../components/common/CardFallback";
import MovieSwipe from "../components/common/MovieSwipe";
import useFetchInfinite from "../hooks/useFetchInfinite";

const Home = () => {
  const { data, loading } = useFetchInfinite("movie/popular");

  if (loading) return <CardFallback num={12} />;

  return (
    <>
      <MovieSwipe />
      <ul className="flex flex-wrap mt-4 justify-center gap-4">
        {data
          ?.filter((el) => el.adult === false)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </ul>
    </>
  );
};

export default Home;
