"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";
import { Movie } from "../../../utils/getData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getVideosById, Videos } from "../../../utils/get-videos";

type NowPlayingProps = {
  movies: Movie[];
};

export const NowPlaying = ({ movies }: NowPlayingProps) => {
  return (
    <Carousel className="w-full pt-15 sm:rounded-2xl lg:rounded-4xl overflow-hidden lg:max-w-360">
      <CarouselContent>
        {movies.map((movie) => {
          const [clicked, setClicked] = useState(false);
          const [trailers, setTrailers] = useState<Videos[]>([]);
          useEffect(() => {
            const fetchTrailers = async () => {
              const response = await getVideosById(String(movie.id));
              setTrailers(response.results);
            };
            fetchTrailers();
          }, []);

          const trailer =
            trailers.find(
              (t) => t.site === "YouTube" && t.type === "Trailer" && t.official,
            ) ||
            trailers.find(
              (t) => t.site === "YouTube" && t.type === "Trailer",
            ) ||
            trailers.find((t) => t.site === "YouTube");

          return (
            <CarouselItem key={movie.id}>
              <Link href={`/movie-details/${movie.id}`}>
                <div className="sm:aspect-12/5 ">
                  {clicked ? (
                    <iframe
                      className="flex flex-col w-full object-cover h-61.5 sm:h-full sm:absolute sm:z-10"
                      src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=0`}
                      title={trailer?.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt=""
                      className="flex flex-col w-full object-cover h-61.5 sm:h-full sm:absolute sm:-z-10"
                    />
                  )}
                  <div className="h-full w-full flex items-center sm:pl-[10%]">
                    <div className="flex flex-col sm:w-101 gap-4 p-5">
                      <div className="flex sm:text-white max-sm:items-center justify-between sm:flex-col">
                        <div>
                          <p className="text-lg sm:text-shadow-[0px_0px_10px_rgba(0,0,0,0.6)]">
                            Now Playing:
                          </p>
                          <span className="text-2xl sm:text-shadow-[0px_0px_10px_rgba(0,0,0,0.6)] font-semibold">
                            {movie.original_title}
                          </span>
                        </div>
                        <div className="text-lg sm:text-shadow-[0px_0px_10px_rgba(0,0,0,1)] flex items-center gap-0.5 font-semibold">
                          <img
                            src="/star.png"
                            alt="star"
                            className="h-7 aspect-square "
                          />
                          {movie.vote_average.toFixed(1)}
                          <p className="text-[#d4d4d4] sm:text-shadow-[0px_0px_5px_rgba(0,0,0,1)] text-base">
                            /10
                          </p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-shadow-[0px_0px_5px_rgba(0,0,0,1)] sm:text-white">
                        {movie.overview}
                      </span>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setClicked(true);
                        }}
                        variant="outline"
                        className="w-36.25 sm:shadow-[0px_0px_10px_rgba(0,0,0,0.2)] backdrop-brightness-80 dark:backdrop-blur-sm h-10 cursor-pointer"
                      >
                        <Play />
                        Watch Trailer
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="max-sm:hidden backdrop-brightness-80 cursor-pointer dark:backdrop-blur-sm dark:hover:" />
      <CarouselNext className="max-sm:hidden backdrop-brightness-80 cursor-pointer dark:backdrop-blur-sm" />
    </Carousel>
  );
};
