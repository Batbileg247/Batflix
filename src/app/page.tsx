"use client";

import { useEffect, useState } from "react";
import { Cards } from "./_components/Cards";
import { NowPlaying } from "./_components/Nowplayin";
import { datas } from "../../utils/getData";

export type Movie = {
  movie: string;
  id: string;
  backdrop_path: string;
  original_title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
};

export default function Home() {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchedMovies = async () => {
      const nowplaying = await datas("nowplaying");
      setNowPlaying(nowplaying.results);

      const upcoming = await datas("upcoming");
      setUpcoming(upcoming.results);

      const popular = await datas("upcoming");
      setPopular(popular.results);

      const topRated = await datas("upcoming");
      setTopRated(topRated.results);
    };
    fetchedMovies();
  }, []);

  console.log(upcoming);

  return (
    <div className="flex flex-col w-full items-center">
      <NowPlaying movies={nowPlaying} />
      <Cards movies={upcoming} />
      <Cards movies={popular} />
      <Cards movies={topRated} />
    </div>
  );
}
