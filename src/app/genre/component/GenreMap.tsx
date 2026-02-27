"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, X } from "lucide-react";
import { Genre } from "../../../../utils/get-genre";

type GenreMapProps = {
  genres: Genre[];
  currentGenreIds: string[] | undefined;
  isSelectedGenre: (id: string) => boolean | undefined;
  remainingGenres: (selectedGenreId: string) => string[] | undefined;
};

export const GenreMap = ({
  genres,
  currentGenreIds,
  isSelectedGenre,
  remainingGenres,
}: GenreMapProps) => {
  return (
    <>
      {genres.map((genre) => {
        const isSelected = isSelectedGenre(String(genre.id));
        const filterNewGenres = isSelected
          ? remainingGenres(String(genre.id))
          : [...(currentGenreIds || []), genre.id];
        const newGenres = filterNewGenres?.filter((genre) => genre !== "");
        return (
          <Link key={genre.id} href={`/genre?genre=${newGenres} `}>
            <Badge
              variant={isSelected ? "default" : "outline"}
              className="flex items-center gap-1 cursor-pointer"
            >
              {genre.name}
              {isSelected ? <X /> : <ChevronRight size={14} />}
            </Badge>
          </Link>
        );
      })}
    </>
  );
};
