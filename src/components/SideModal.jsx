import FavoriteButton from "../components/common/FavoriteButton";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../constants/config";

function SideModal({ setIsOpen, title, direction = "left" }) {
  const navigate = useNavigate();

  const { data } = useFetch("movie/popular");
  const likeItemsId = useSelector((state) => state.like);

  const likeList = data.results
    ? data.results.filter((movie) => likeItemsId.includes(movie.id))
    : [];

  return (
    <section
      className="fixed inset-0 z-50 bg-black/50"
      onClick={() => setIsOpen()}
    >
      <div
        className={`fixed top-0 h-full w-96 overflow-y-scroll bg-white transition-transform duration-300 dark:bg-dark-main ${
          direction === "right"
            ? "right-0 translate-x-0"
            : "left-0 -translate-x-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-6 top-6 cursor-pointer"
          onClick={() => setIsOpen()}
        >
          X
        </button>
        <div className="p-6">{title}</div>
        <ul className="flex flex-wrap px-3 gap-4 justify-center">
          {likeList &&
            likeList.map((movie) => (
              <li
                key={movie.id}
                onClick={() => navigate(`/details/${movie.id}`)}
                className="relative cursor-pointer group w-[45%]"
              >
                <span className="absolute top-2 right-2 z-10">
                  <FavoriteButton id={movie.id} />
                </span>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={`${IMG_URL}original${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default SideModal;
