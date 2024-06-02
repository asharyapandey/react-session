import language from "../language";
import { Lang, Movie } from "../types";

interface MovieCardProps {
	movie: Movie;
	onAddToWatchList: (movie: Movie) => void;
	isInWatchList: boolean;
	lang: Lang;
}

const MovieCard = ({
	movie,
	onAddToWatchList,
	isInWatchList,
	lang,
}: MovieCardProps) => {
	return (
		<div className="movie-card">
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
				className="movie-image"
			/>
			<div className="movie-details">
				<h3 className="movie-name">{movie.title}</h3>
				<button
					className="watchlist-button"
					onClick={() => onAddToWatchList(movie)}
					disabled={isInWatchList}
				>
					{isInWatchList
						? language[lang].REMOVE_WATCHLIST
						: language[lang].TO_WATCHLIST}
				</button>
			</div>
		</div>
	);
};

export default MovieCard;
