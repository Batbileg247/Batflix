import { Button } from "@/components/ui/button";
import { Film, Search } from "lucide-react";
import Link from "next/link";
import { Genres } from "./Genres";
import { SearchInput } from "./SearchInput";
import { Themes } from "./Theme";

export const Heads = () => {
  return (
    <header className="h-15 w-screen fixed z-10 justify-between items-center flex px-[5%] dark:bg-black bg-white">
      <Link href="/" className="flex text-indigo-700 gap-2">
        <Film className="font-extralight" />
        <h1 className="text-base font-bold">Batflix</h1>
      </Link>
      <div className="flex gap-3 px-2 h-9 max-sm:hidden">
        <Genres />
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
