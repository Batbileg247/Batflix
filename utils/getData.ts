export const datas = async (category: string, pageNum: number) => {
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
