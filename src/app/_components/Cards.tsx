"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Movie } from "../page";

export type CardType = {
  movies: Movie[];
};

export const Cards = ({ movies }: CardType) => {
  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-10 flex flex-col items-center">
      <div className="lg:max-w-7xl">
        <header className="flex flex-row items-center justify-between mb-8">
          <h1 className="text-xl font-semibold text-foreground sm:text-2xl">
            "name"
          </h1>
          {/* <Link href={"/page"} className={`flex gap-2 ${ontoggle}`}>
            <p>See more</p> <ArrowRight />
          </Link> */}
        </header>
        <div className="w-full items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
            {movies.map((movie) => (
              <button
                className="rounded-lg cursor-pointer hover:opacity-70 transition-all hover:scale-102 overflow-hidden w-full"
                key={movie.id}
              >
                <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.original_title}
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
                    <p className="">{movie.vote_average}</p>
                    <p className="text-[#71717A] text-xs">/10</p>
                  </div>
                  <h1 className="text-sm">{movie.original_title}</h1>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
