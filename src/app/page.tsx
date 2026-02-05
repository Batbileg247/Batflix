"use client";

import { useEffect, useState } from "react";
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
  Film,
  Moon,
  Search,
  Play,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  Sun,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className=" flex flex-col w-full items-center">
      <Heads />
      <NowPlaying />
      <Cards />
      <Footer />
    </div>
  );
}

const Heads = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header
      className={cn(
        "h-15 w-screen fixed z-10 justify-between items-center flex px-[5%]",
        isDark ? "bg-black" : "bg-white",
      )}
    >
      <div className="flex text-indigo-700 gap-2">
        <Film className="font-extralight" />
        <h1 className="text-base font-bold">Batflix</h1>
      </div>
      <div className="flex gap-3 px-2 h-9 max-sm:hidden">
        <Button
          variant="outline"
          className="h-full cursor-pointer"
          size="default"
          aria-label="Submit"
        >
          <ChevronDown />
          Genre
        </Button>
        <div className="relative w-90">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            placeholder="Search..."
            className="h-full w-full rounded-md border pl-10"
          />
        </div>
      </div>
      <div className="flex w-21 justify-between">
        <Button
          variant="outline"
          className="sm:hidden"
          size="icon"
          aria-label="Submit"
        >
          <Search />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Submit"
          onClick={toggleDarkMode}
          className="cursor-pointer"
        >
          {isDark ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <div className="px-5 sm:px-20 sm:py-10 flex-col sm:flex-row sm:justify-between py-10 w-full bg-indigo-700 text-white flex">
      <div className="flex flex-col gap-3 mb-7">
        <div className="flex text-white gap-2">
          <Film className="font-extralight" />
          <h1 className="text-base font-bold">Batflix</h1>
        </div>
        <div>
          <h1 className="text-[14px]">© 2026 Batflix. All Rights Reserved.</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="mb-3">Contact Information</h1>
          <div className="flex items-center mb-6">
            <Mail className="h-4 mr-3" />
            <div>
              <h1>Email:</h1>
              <p>support@batflix.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 mr-3" />
            <div>
              <h1>Phone:</h1>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-28 sm:w-1/2 gap-3">
          <h1 className="text-lg">Follow us~</h1>
          <div className="flex flex-wrap sm:flex-row gap-3">
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
            <a href="">Youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const movieCardArr = [
    {
      img: "shrek.jpg",
      id: 1,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "shrek.jpg",
      id: 2,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "shrek.jpg",
      id: 3,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "shrek.jpg",
      id: 4,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "shrek.jpg",
      id: 5,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "shrek.jpg",
      id: 6,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "shrek.jpg",
      id: 7,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "shrek.jpg",
      id: 8,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "shrek.jpg",
      id: 9,
      rating: 6.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, excepturi ipsa? Recusandae earum ipsum omnis, modi quidem consequatur rerum ut quaerat dolore, voluptatum ea consequuntur tenetur quo fuga! Omnis, culpa.",
      name: "Shrek-sama",
    },
    {
      img: "shrek.jpg",
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
            Upcoming
          </h1>
          <Button className="cursor-pointer" variant={null}>
            See More
            <ArrowRight />
          </Button>
        </header>
        <div className="w-full items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
            {movieCardArr.map((card) => (
              <button className="rounded-lg cursor-pointer hover:opacity-70 transition-all hover:scale-102 overflow-hidden w-full" key={card.id}>
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full object-cover aspect-2/3"
                />
                <div className="h-19 p-2 bg-[#F4F4F5] dark:bg-[#27272A]">
                  <div className="text-xs sm:text-sm flex items-center font-semibold">
                    <img
                      src="/starwhite.png"
                      alt="star"
                      className="h-4 aspect-square hidden dark:block"
                    />
                    <img
                      src="/star.png"
                      alt="star"
                      className="h-4 aspect-square block dark:hidden"
                    />
                    <p className="">{card.rating}</p>
                    <p className="text-[#71717A] text-xs">/10</p>
                  </div>
                  <h1 className="text-sm">{card.name}</h1>
                </div>
              </button>
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
                  <Button className="w-36.25 h-10 dark:hover:bg-black sm:hover:text-white sm:bg-white sm:text-black">
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
