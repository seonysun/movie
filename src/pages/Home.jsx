import MovieCard from "../components/common/MovieCard";
import CardFallback from "../components/common/CardFallback";
import MovieSwipe from "../components/common/MovieSwipe";
import useFetchInfinite from "../hooks/useFetchInfinite";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Home = () => {
  const { data, loading, hasNextPage, fetchData } =
    useFetchInfinite("movie/popular");
  const observerRef = useIntersectionObserver({ hasNextPage, fetchData });

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
      <div ref={observerRef} className="h-3" />
    </>
  );
};

export default Home;
