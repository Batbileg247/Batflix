export const getSearchValue = async (searchValue: string, page: string): Promise<GetSearch> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
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

export interface GetSearch {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Movie {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
