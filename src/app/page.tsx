"use client";

import { Cards } from "./_components/Cards";
import { NowPlaying } from "./_components/Nowplayin";
import { useMovieData } from "@/hooks/useMovieData";

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
   const { nowPlaying, upcoming, popular, topRated } = useMovieData();

  return (
    <div className="flex flex-col w-full items-center">
      <NowPlaying
        movies={nowPlaying}
        name=""
        ontoggle={false}
        setMovies={setMovies}
      />
      <Cards
        movies={upcoming}
        name="Upcoming"
        ontoggle={true}
        setMovies={setMovies}
      />
      <Cards
        movies={popular}
        name="Popular"
        ontoggle={true}
        setMovies={setMovies}
      />
      <Cards
        movies={topRated}
        name="Top_rated"
        ontoggle={true}
        setMovies={setMovies}
      />
    </div>
  );
}
