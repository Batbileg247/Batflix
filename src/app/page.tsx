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
      const nowplaying = await datas("now_playing", 1);
      setNowPlaying(nowplaying.results);

      const upcoming = await datas("upcoming", 1);
      setUpcoming(upcoming.results);

      const popularData = await datas("popular", 1);
      setPopular(popularData.results);

      const topRatedData = await datas("top_rated", 1);
      setTopRated(topRatedData.results);
    };
    fetchedMovies();
  }, []);

  console.log(upcoming);

  return (
    <div className="flex flex-col w-full items-center">
      <NowPlaying movies={nowPlaying} name="" ontoggle={false} />
      <Cards movies={upcoming} name="Upcoming" ontoggle={true} />
      <Cards movies={popular} name="Popular" ontoggle={true} />
      <Cards movies={topRated} name="Top_rated" ontoggle={true}/>
    </div>
  );
}
