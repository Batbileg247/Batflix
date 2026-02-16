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
      <InputGroup className="max-w-xs">
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
          <DropdownMenuGroup className="flex w-xl dark:bg-[#27272A] bg-[#F4F4F5] mt-2 rounded-xl overflow-hidden flex-col">
            {movies.slice(0, 5).map((movie) => (
              <Link
                href={`/movie-details/${movie.id}`}
                className=" bg-[#F4F4F5] border-b p-4 dark:bg-[#27272A] cursor-pointer flex transition-all hover:opacity-95 overflow-hidden w-full"
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                  className="w-18 aspect-2/3 rounded-xl overflow-hidden p-2"
                />
                <div className="flex flex-col">
                  <div className="h-19 p-2 flex flex-col items-start bg-[#F4F4F5] dark:bg-[#27272A]">
                    <h1 className="text-sm">{movie.original_title}</h1>
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
                  <div>{movie.release_date}</div>
                </div>
              </Link>
            ))}
          </DropdownMenuGroup>
      </DropdownMenu>
    </div>
  );
};
