import PropTypes from "prop-types";

export const Film = ({ film }) => {
	const handleUnFavorite = () => {
		console.log('handleUnFavorite');
	}
	return (
		<div className="film">
			<img src={film.image} alt={film.title} />
			{film.title}
			{film.year}
			{film.genre}
			{film.isFavorited && <div onClick={handleUnFavorite}> UnCheck favorite</div> }
		</div>
	);
};

Film.propTypes = {
	film: PropTypes.object,
};
