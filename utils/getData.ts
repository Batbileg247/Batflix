export interface MoviesRespose {
  dates: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getMovies = async (
  category: string,
  pageNum: number,
): Promise<MoviesRespose> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${pageNum}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const getHomePageMovies = async () => {
  const { results: upcoming } = await getMovies("upcoming", 1);
  const { results: popular } = await getMovies("popular", 1);
  const { results: top_rated } = await getMovies("top_rated", 1);
  const { results: now_playing } = await getMovies("now_playing", 1);

  return {
    now_playing,
    upcoming,
    popular,
    top_rated,
  };
};
