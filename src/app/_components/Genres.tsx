"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { getGenre, Genre } from "../../../utils/get-genre";
import { ChevronRight, X } from "lucide-react";
import Link from "next/link";

interface GenresProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Genres = ({ setOpen }: GenresProps) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const params = useSearchParams();

  const stringFromUrl = params.get("genre");

  const idFromUrl = stringFromUrl?.split(",");

  const isSelectedGenre = (id: string) => {
    return idFromUrl?.includes(id);
  };

  const remainingGenres = (selectedGenreId: string) =>
    idFromUrl?.filter((currentGenreId) => currentGenreId !== selectedGenreId);

  useEffect(() => {
    const getGernresFunction = async () => {
      const res = await getGenre();
      setGenres(res.genres);
    };
    getGernresFunction();
  }, []);

  return (
    <>
      {genres.map((genre) => {
        const isActive = isSelectedGenre(String(genre.id));
        const filterNewGenres = isActive
          ? remainingGenres(String(genre.id))
          : [...(idFromUrl || []), genre.id];
        const newGenres = filterNewGenres?.filter((genre) => genre !== "");

        return (
          <Link
            key={genre.id}
            href={`/search?genre=${newGenres?.join(",")}`}
            onClick={() => setOpen(false)}
          >
            <Badge
              variant={isActive ? "default" : "outline"}
              className="flex items-center gap-1 cursor-pointer"
            >
              {genre.name}
              {isActive ? <X /> : <ChevronRight size={14} />}
            </Badge>
          </Link>
        );
      })}
    </>
  );
};
