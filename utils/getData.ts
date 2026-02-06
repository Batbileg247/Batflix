export const datas = async (category: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
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
