import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants/config.js";
import MovieDetail from "../components/common/MovieDetail.jsx";
import useFetch from "../hooks/useFetch.js";
import DetailFallback from "../components/common/DetailFallback.jsx";

const Detail = () => {
  const selectedId = useParams().id;
  const { data = {}, loading } = useFetch(`movie/${selectedId}`);

  if (Object.keys(data).length === 0 || loading) return <DetailFallback />;

  return (
    <main className="pb-8 px-16 text-white">
      <img
        src={`${IMG_URL}w500${data.backdrop_path}`}
        alt="background image"
        className="absolute left-0 blur -z-10 brightness-50 w-full"
      />
      <MovieDetail movie={data} />
    </main>
  );
};

export default Detail;
