import MovieCard from "../components/common/MovieCard";
import CardFallback from "../components/common/CardFallback";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const { data, loading } = useFetch(
    `search/movie?query=${searchParams.get("movie")}`
  );

  if (loading) return <CardFallback num={12} />;

  return (
    <main className="px-16">
      <p className="text-xl">
        <span className="text-purple font-semibold text-2xl">
          {searchParams.get("movie")}
        </span>
        로 <span className="font-semibold text-2xl">{data.total_results}</span>
        개의 영화를 찾았습니다.
      </p>
      <ul className="flex flex-wrap mt-6 justify-center gap-4">
        {data.results?.length > 0 ? (
          data.results
            .filter((el) => el.adult === false)
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>검색 결과가 없습니다</p>
        )}
      </ul>
    </main>
  );
};

export default Search;
