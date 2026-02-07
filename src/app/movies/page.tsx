"use client";

import { useEffect, useState } from "react";
import { Cards } from "../_components/Cards";
import { Movie } from "../page";
import { datas } from "../../../utils/getData";
import { PaginationDemo } from "../_components/Pagnition";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const fetchedMovies = async () => {
      const typeOf = await datas(`${movies}`, `&page=${pageNum}`);
      setMovies(typeOf.results);
    };

    fetchedMovies();
  }, [pageNum]);

  return (
    <div className="flex flex-col pt-10 w-full pb-19 items-center">
      <Cards movies={movies} name="Upcoming" ontoggle={false} setMovies={setMovies} />
      <PaginationDemo page={pageNum} setPage={setPageNum} />
    </div>
  );
}
