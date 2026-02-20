export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  sentiment_result: {
    isHappy?: boolean;
    isNeutral?: boolean;
    isSad?: boolean;
  };
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

