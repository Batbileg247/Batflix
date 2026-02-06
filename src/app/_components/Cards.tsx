"use client";

import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type CardType = {
  name: string;
  page: string;
  toggle: string
};

export const Cards = ({ name, page, toggle }: CardType) => {
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
            {name}
          </h1>
          <Link href={page} className={`flex gap-2 ${toggle}`}>
            <p>See more</p> <ArrowRight />
          </Link>
        </header>
        <div className="w-full items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
            {movieCardArr.map((card) => (
              <button
                className="rounded-lg cursor-pointer hover:opacity-70 transition-all hover:scale-102 overflow-hidden w-full"
                key={card.id}
              >
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
