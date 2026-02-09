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
      const nowPlaying = await datas(`now_playing`, `&page=1`);
      setNowPlaying(nowPlaying.results);

      const upcoming = await datas(`upcoming`, `&page=1`);
      setUpcoming(upcoming.results);

      const popular = await datas(`popular`, `&page=1`);
      setPopular(popular.results);

      const topRated = await datas(`top_rated`, `&page=1`);
      setTopRated(topRated.results);
    };

    fetchedMovies();
  }, []);
  console.log(nowPlaying, upcoming, popular, topRated);

  return (
    <div className="flex flex-col w-full items-center">
      <NowPlaying movies={nowPlaying} />
      <Cards
        movies={upcoming}
        name="Upcoming"
        ontoggle={true}
        setMovies={setUpcoming}
      />
      <Cards
        movies={popular}
        name="Popular"
        ontoggle={true}
        setMovies={setPopular}
      />
      <Cards
        movies={topRated}
        name="Top rated"
        ontoggle={true}
        setMovies={setTopRated}
      />
    </div>
  );
}
