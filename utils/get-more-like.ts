export const getSimiliarMovies = async (movieId: string, page: string): Promise<GetMoreLike> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${page}`,
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

export interface GetMoreLike {
  page: number
  results: MoreLike[]
  total_pages: number
  total_results: number
}

export interface MoreLike {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: string
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
