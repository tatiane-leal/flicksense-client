export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
}

export interface MoviePayload {
  user?: any;
  id: string | undefined;
  movies: Movie[];
  newProd?: string;
}

export interface NewMovie {
  title?: string;
}

