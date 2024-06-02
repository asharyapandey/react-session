import MovieCard from "./MovieCard";
import { Lang, Movie, Nav } from "../types";

interface MovieListProps {
	movies: Movie[];
	onAddToWatchList: (movie: Movie) => void;
	watchList: Movie[];
	nav: Nav;
	lang: Lang;
}

const MovieList = ({
	movies,
	onAddToWatchList,
	watchList,
	nav,
	lang,
}: MovieListProps) => {
	const list = nav === Nav.MovieList ? movies : watchList;

	return (
		<div className="movie-list">
			{list.map((movie) => (
				<MovieCard
					key={movie.id}
					movie={movie}
					lang={lang}
					onAddToWatchList={onAddToWatchList}
					isInWatchList={watchList.some((m) => m.id === movie.id)}
				/>
			))}
		</div>
	);
};

export default MovieList;
