"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Movie } from "../page";
import { CardType } from "./Cards";

export const NowPlaying = ({ movies }: CardType) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full pt-15 lg:max-w-360"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {movies.map((movie: Movie) => (
          <CarouselItem key={movie.id}>
            <div className="sm:aspect-12/5">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt=""
                className="flex flex-col w-full object-cover h-61.5 sm:h-full sm:absolute sm:-z-10"
              />
              <div className="h-full w-full flex items-center sm:pl-[10%]">
                <div className="flex flex-col sm:w-101 gap-4 p-5">
                  <div className="flex sm:text-white max-sm:items-center justify-between sm:flex-col">
                    <div>
                      <p className="text-lg">Now Playing:</p>
                      <span className="text-2xl font-semibold">
                        {movie.original_title}
                      </span>
                    </div>
                    <div className="text-lg flex items-center gap-0.5 font-semibold">
                      <img
                        src="/star.png"
                        alt="star"
                        className="h-7 aspect-square"
                      />
                      {movie.vote_average}
                      <p className="text-[#71717A] text-base">/10</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-white">
                    {movie.overview}
                  </span>
                  <Button variant="outline" className="w-36.25 h-10 cursor-pointer">
                    <Play />
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-sm:hidden cursor-pointer" />
      <CarouselNext className="max-sm:hidden cursor-pointer" />
    </Carousel>
  );
};
