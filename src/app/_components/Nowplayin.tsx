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
import {
  Play,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";


export const NowPlaying = () => {
  const movieArr = [
    {
      img: "https://m.media-amazon.com/images/M/MV5BMjVhOGIxYWYtNGFmMC00OGEyLThmOWUtOWEzODU2ZjM3MWQyXkEyXkFqcGc@._V1_QL75_UX290_.jpg",
      id: 1,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Jangum-sama",
    },
    {
      img: "/jangum.jpg",
      id: 2,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Jangum-sama",
    },
    {
      img: "/jangum.jpg",
      id: 3,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Jangum-sama",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full pt-15 lg:max-w-360"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {movieArr.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="sm:aspect-12/5">
              <img
                src={movie.img}
                alt=""
                className="flex flex-col w-full object-cover h-61.5 sm:h-full sm:absolute sm:-z-10"
              />
              <div className="h-full w-full flex items-center sm:pl-[10%]">
                <div className="flex flex-col sm:w-101 gap-4 p-5">
                  <div className="flex sm:text-white max-sm:items-center justify-between sm:flex-col">
                    <div>
                      <p className="text-lg">Now Playing:</p>
                      <span className="text-2xl font-semibold">
                        {movie.name}
                      </span>
                    </div>
                    <div className="text-lg flex items-center gap-0.5 font-semibold">
                      <img
                        src="/star.png"
                        alt="star"
                        className="h-7 aspect-square"
                      />
                      {movie.rating}
                      <p className="text-[#71717A] text-base">/10</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-white">{movie.desc}</span>
                  <Button className="w-36.25 h-10 cursor-pointer dark:hover:bg-black sm:hover:text-white sm:bg-white sm:text-black">
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