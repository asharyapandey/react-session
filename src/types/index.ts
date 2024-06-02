export interface Movie {
	id: number;
	title: string;
	poster_path: string;
}

export enum Nav {
	MovieList,
	WatchList,
}

export enum Lang {
	En = "eng",
	Np = "nep",
}
