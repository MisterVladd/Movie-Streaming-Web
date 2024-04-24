import PropTypes from "prop-types";
import "./Trending.scss";
import { Heart } from "../../icons/Home/Heart";

export const Trending = ({ trending, isSelected, content }) => {
  const handleUnFavorite = () => {
    console.log("handleUnFavorite");
  };
  return (
    <div className={`trending ${isSelected ? 'selected' : ''}`}>
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
          {isSelected && (
            <div className="content">
              <div className="content__title">{`Title: ${content.title}`}</div>
              <div className="content__year">{`Year: ${content.year}`}</div>
              <div className="content__genre">{`Genre: ${content.genre}`}</div>
            </div>
          )}
    </div>
  );
};

Trending.propTypes = {
  trending: PropTypes.object,
};
