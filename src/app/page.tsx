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
import { Film, Moon, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <div>
      <header className="h-15 w-screen justify-between items-center flex px-5">
        <div className="flex gap-2">
          <Film />
          <h1>Batflix</h1>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="icon" aria-label="Submit">
            <Search />
          </Button>
          <Button variant="outline" size="icon" aria-label="Submit">
            <Moon />
          </Button>
        </div>
      </header>
      <NowPlaying />
      <section>
        <div>
          <h1>Upcoming</h1>
          <p>See more</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="w-10">helloowww</div>
          <div className="w-10">helloowww</div>
          <div className="w-10">helloowww</div>
          <div className="w-10">helloowww</div>
          <div className="w-10">helloowww</div>
        </div>
      </section>
    </div>
  );
}

const movieArr = [
  {
    img: "/jangum.jpg",
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

const NowPlaying = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative px-3"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {movieArr.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="relative">
              <img src={movie.img} alt={movie.name} className="" />
              <h1>{movie.name}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
