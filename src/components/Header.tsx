import language from "../language";
import { Lang, Nav } from "../types";

interface Props {
	nav: Nav;
	changeNav: (nav: Nav) => void;
	lang: Lang;
	changeLang: (nav: Lang) => void;
}

const Header = ({ nav, changeNav, lang, changeLang }: Props) => {
	const onMovieListClick = () => {
		changeNav(Nav.MovieList);
	};

	const onWatchListClick = () => {
		changeNav(Nav.WatchList);
	};
	const onEnClick = () => {
		changeLang(Lang.En);
	};

	const onNpClick = () => {
		changeLang(Lang.Np);
	};

	return (
		<header className="header">
			<div className="nav-buttons">
				<button
					className={`nav-button ${
						nav === Nav.MovieList ? "nav-button-active" : ""
					}`}
					onClick={onMovieListClick}
				>
					{language[lang].WATCH_LIST}
				</button>
				<button
					className={`nav-button ${
						nav === Nav.WatchList ? "nav-button-active" : ""
					}`}
					onClick={onWatchListClick}
				>
					{language[lang].WATCH_LIST}
				</button>
			</div>
			<div className="lang-buttons">
				<button
					className={`lang-button ${
						lang === Lang.En ? "nav-button-active" : ""
					}`}
					onClick={onEnClick}
				>
					{language[lang].ENGLISH}
				</button>
				<button
					className={`lang-button ${
						lang === Lang.Np ? "nav-button-active" : ""
					}`}
					onClick={onNpClick}
				>
					{language[lang].NEPALI}
				</button>
			</div>
		</header>
	);
};

export default Header;
