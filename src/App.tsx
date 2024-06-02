import { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import movies from "./data/movies";
import { Lang, Movie, Nav } from "./types";

function App() {
	const [watchList, setWatchList] = useState<Movie[]>([]);
	const [nav, setNav] = useState<Nav>(Nav.MovieList);
	const [lang, setLang] = useState(Lang.En);

	const handleAddToWatchList = (movie: Movie) => {
		setWatchList((prevList) => [...prevList, movie]);
	};

	const changeNav = (nav: Nav) => {
		setNav(nav);
	};

	const changeLang = (lang: Lang) => {
		setLang(lang);
	};

	return (
		<main>
			<Header
				nav={nav}
				changeNav={changeNav}
				lang={lang}
				changeLang={changeLang}
			/>
			<MovieList
				movies={movies}
				watchList={watchList}
				onAddToWatchList={handleAddToWatchList}
				nav={nav}
				lang={lang}
			/>
		</main>
	);
}

export default App;
