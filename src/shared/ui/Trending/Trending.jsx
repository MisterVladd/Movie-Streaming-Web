import PropTypes from "prop-types";
import "./Trending.scss";
import { Heart } from "../../icons/Home/Heart";

export const Trending = ({ trending }) => {
  const handleUnFavorite = () => {
    console.log("handleUnFavorite");
  };
  return (
    <div className="trending">
      <div className="img">
        <img src={trending.image} alt={trending.title} />
		{trending.isFavorited && (
          <div className="favourite" onClick={handleUnFavorite}><Heart /></div>
        )}
        <div className="trending__name">
		<div className="title">{trending.title}</div>
        <div className="desc">{trending.desc}</div>
		</div>
      </div>
    </div>
  );
};

Trending.propTypes = {
  trending: PropTypes.object,
};
