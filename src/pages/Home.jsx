import MovieCard from "../components/common/MovieCard";
import CardFallback from "../components/common/CardFallback";
import MovieSwipe from "../components/common/MovieSwipe";
import useFetchInfinite from "../hooks/useFetchInfinite";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Home = () => {
  const { data, hasNextPage, fetchData } = useFetchInfinite("movie/popular");
  const observerRef = useIntersectionObserver({ hasNextPage, fetchData });

  return (
    <>
      <MovieSwipe />
      <main className="px-[7%]">
        <ul className="flex flex-wrap mt-4 gap-6">
          {data
            ?.filter((el) => el.adult === false)
            .map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
      </main>
      <div ref={observerRef} className="h-3" />
    </>
  );
};

export default Home;
