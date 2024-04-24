import PropTypes from "prop-types";
import "./Watching.scss";
import { Heart } from "../../icons/Home/Heart";

export const Watching = ({ watching }) => {
  const handleUnFavorite = () => {
    console.log("handleUnFavorite");
  };
  return (
    <div className="watching">
      <div className="img">
        <img src={watching.image} alt="Photo" />
        {watching.isFavorited && (
          <div className="favourite" onClick={handleUnFavorite}>
            <Heart />
          </div>
        )}
      </div>
    </div>
  );
};

Watching.propTypes = {
  watching: PropTypes.object,
};
