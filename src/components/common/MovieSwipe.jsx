import { IMG_URL } from "../../constants/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const MovieSwipe = ({ movieList }) => {
  const navigate = useNavigate();

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      navigation
      pagination={{ clickable: true }}
    >
      {movieList.results.map((movie) => (
        <SwiperSlide key={movie.id}>
          <img
            src={`${IMG_URL}original${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute right-20 bottom-[12%] flex flex-col gap-1  text-xl items-end text-white">
            <p className="text-4xl font-semibold drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
              {movie.title}
            </p>
            <p className="drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
              {movie.release_date}
            </p>
            <button
              className="bg-purple py-2 px-4 rounded-xl mt-2 hover:bg-purple-hover"
              onClick={() => navigate(`/details/${movie.id}`)}
            >
              더보기
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSwipe;
