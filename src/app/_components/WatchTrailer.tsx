"use client";

import { Button } from "@/components/ui/button";
import { Videos } from "../../../utils/get-videos";
import { Play } from "lucide-react";
import { MovieDetails } from "../../../utils/get-movie-by-id";
import { useState } from "react";

export type WatchTrailerProps = {
  movie: MovieDetails;
  trailer: Videos;
};

export const WatchTrailer = ({ movie, trailer }: WatchTrailerProps) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="relative flex flex-col-reverse w-full">
      {clicked ? (
        <iframe
          className="w-full lg:max-w-190 aspect-video lg:rounded-sm"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0`}
          title={trailer.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
          className="flex flex-col w-full brightness-50 object-cover h-61.5 sm:h-full sm:absolute sm:-z-10"
        />
      )}
      <Button
        variant="outline"
        onClick={() => setClicked(true)}
        className="w-36.25 m-5 sm:shadow-[0px_0px_10px_rgba(0,0,0,0.2)] backdrop-brightness-80 dark:backdrop-blur-sm h-10 cursor-pointer"
      >
        <Play />
        Watch Trailer
      </Button>
    </div>
  );
};
