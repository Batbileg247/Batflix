export const getGenre = async (): Promise<GetGenres> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
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

export interface GetGenres {
  genres: Genre[]
}

export interface Genre {
  id: number
  name: string
}

export const getPageGenres = async () => {
  const { genres: genres } = await getGenre();

  return {
    genres
  };
};
