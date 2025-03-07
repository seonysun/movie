import { useDispatch, useSelector } from "react-redux";
import { likeSlice } from "../../redux/likeSlice";
import { Like, LikeRed } from "../../assets/icons/index.js";

const FavoriteButton = ({ id }) => {
  const isLike = useSelector((state) => state.like.some((item) => item === id));
  const dispatch = useDispatch();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isLike ? likeSlice.actions.unLike(id) : likeSlice.actions.addLike(id)
        );
      }}
    >
      <img src={isLike ? LikeRed : Like} alt="like" />
    </button>
  );
};

export default FavoriteButton;
