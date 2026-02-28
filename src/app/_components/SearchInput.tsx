"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { ChangeEventHandler, useEffect, useState } from "react";
import { getSearchValue, Movie } from "../../../utils/get-search";
import Link from "next/link";
import { DropdownMenu, DropdownMenuGroup } from "@/components/ui/dropdown-menu";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const newMovies = movies.filter((m) => m.poster_path !== null);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      return;
    }

    const timer = setTimeout(async () => {
      const data = await getSearchValue(searchValue, "1");

      setMovies(data.results);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div>
      <InputGroup className="w-xs">
        <InputGroupInput
          placeholder="Search..."
          value={searchValue}
          onChange={onChangeSearchValue}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <DropdownMenu>
        <DropdownMenuGroup
          onClick={() => setSearchValue("")}
          className={`${movies.length !== 0 ? `block` : `hidden`} flex  border-2 border-neutral-300 dark:border-neutral-700 border-b-0 bg-[#F4F4F5] dark:bg-[#27272A]  mt-2 rounded-t-xl overflow-hidden flex-col`}
        >
          {newMovies.slice(0, 5).map((movie) => (
            <Link
              href={`/movie-details/${movie.id}`}
              className="  py-2 mx-3 border-b  backdrop-blur-xs cursor-pointer flex transition-all hover:opacity-95 overflow-hidden"
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="w-18 aspect-2/3 rounded-xl overflow-hidden p-2"
              />
              <div className="flex flex-col">
                <div className="min-h-19 p-2 flex flex-col items-start   backdrop-blur-xs">
                  <h1 className="text-lg max-w-50 font-semibold">
                    {movie.original_title}
                  </h1>
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
                    <p className="">{movie.vote_average.toFixed(1)}</p>
                    <p className="text-[#71717A] text-xs">/10</p>
                  </div>
                </div>
                <p className="opacity-80 font-semibold">{movie.release_date}</p>
              </div>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuGroup
          onClick={() => setSearchValue("")}
          className={`${movies.length !== 0 ? `block` : `hidden`} border-2 border-neutral-300 dark:border-neutral-700 bg-[#F4F4F5] dark:bg-[#27272A] border-t-0 px-2 pb-3 pt-2 rounded-b-xl`}
        >
          <Link href={`/search/?q=${searchValue}`}>
            See all results of "{searchValue}"
          </Link>
        </DropdownMenuGroup>
      </DropdownMenu>
    </div>
  );
};
