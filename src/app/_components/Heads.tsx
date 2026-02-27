"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Film, Search } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { Themes } from "./Theme";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Genres } from "./Genres";

export const Heads = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openGenreMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header className="h-15 w-screen fixed z-10 justify-between items-center flex px-[5%] dark:bg-black bg-white">
      <Link href="/" className="flex text-indigo-700 gap-2">
        <Film className="font-extralight" />
        <h1 className="text-base font-bold">Batflix</h1>
      </Link>
      <div className="flex gap-3 px-2 h-9 max-sm:hidden">
        <>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" onClick={openGenreMenu}>
                <ChevronDown />
                Genre
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="sm:w-xl w-screen p-5">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="pb-4 border-b">
                  <h1 className="text-2xl font-semibold">Genres</h1>
                  <p>See lists of movies by genres</p>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuGroup className="flex gap-4 flex-wrap pt-4">
                <Genres setOpen={setOpen} />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
        <SearchInput />
      </div>
      <div className="flex w-21 justify-between">
        <Button
          variant="outline"
          className="sm:hidden cursor-pointer"
          size="icon"
          aria-label="Submit"
        >
          <Search />
        </Button>
        <Themes />
      </div>
    </header>
  );
};
