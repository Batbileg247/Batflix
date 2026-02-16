import { Badge } from "@/components/ui/badge";
import { getGenre } from "../../../utils/get-genre";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Genres = async () => {
  const { genres } = await getGenre()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
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
          {genres.map((genre) => (
            <Link key={genre.id} href={`/genre/${genre.id}`}>
              <Badge
                variant="outline"
                className="flex items-center gap-1 cursor-pointer"
              >
                {genre.name}
                <ChevronRight size={14} />
              </Badge>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
