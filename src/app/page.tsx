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
import { Film, Moon, Search, Play, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <div className=" flex flex-col w-full items-center">
      <header className="h-15 w-screen bg-white fixed z-10 justify-between items-center flex px-[5%]">
        <div className="flex gap-2">
          <Film />
          <h1>Batflix</h1>
        </div>
        <div className="flex w-21 justify-between">
          <Button variant="outline" size="icon" aria-label="Submit">
            <Search />
          </Button>
          <Button variant="outline" size="icon" aria-label="Submit">
            <Moon />
          </Button>
        </div>
      </header>
      <NowPlaying />
      <Cards />
    </div>
  );
}

const Cards = () => {
  const movieCardArr = [
    {
      img: "star.jpg",
      id: 1,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "star.jpg",
      id: 2,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "star.jpg",
      id: 3,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "star.jpg",
      id: 4,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "star.jpg",
      id: 5,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "star.jpg",
      id: 6,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "star.jpg",
      id: 7,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "star.jpg",
      id: 8,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "star.jpg",
      id: 9,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "star.jpg",
      id: 10,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
  ];
  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-10 flex flex-col items-center">
      <div className="lg:max-w-7xl">
        <header className="flex flex-row items-center justify-between mb-8">
          <h1 className="text-xl font-semibold text-foreground sm:text-2xl">
            Upcomming
          </h1>
          <Button variant={null}>
            See More
            <ArrowRight />
          </Button>
        </header>
        <div className="w-full items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
            {movieCardArr.map((card) => (
              <div className="rounded-lg overflow-hidden w-full" key={card.id}>
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full object-cover aspect-2/3"
                />
                <div className="h-19 p-2 bg-[#F4F4F5]">
                  <div className="text-lg flex items-center font-semibold">
                    ⭐{card.rating}
                    <p className="text-[#71717A] text-base">/10</p>
                  </div>
                  <h1>{card.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NowPlaying = () => {
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
                    <div className="text-lg flex items-center font-semibold">
                      ⭐{movie.rating}
                      <p className="text-[#71717A] text-base">/10</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-white">{movie.desc}</span>
                  <Button className="w-36.25 h-10 sm:bg-white sm:text-black">
                    <Play />
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-sm:hidden" />
      <CarouselNext className="max-sm:hidden" />
    </Carousel>
  );
};