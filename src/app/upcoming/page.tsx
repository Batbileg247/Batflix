"use client";

import { useEffect, useState } from "react";
import { Cards } from "../_components/Cards";
import { Movie } from "../page";
import { datas } from "../../../utils/getData";
import { PaginationDemo } from "../_components/Pagnition";
import { useMoviesContext } from "../context/useMovies";

export default function Home() {
  const { upcoming } = useMoviesContext();
  console.log(upcoming);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const checkPath = () => {
      if (typeof window !== undefined) {
        const params = window.location.pathname;
        return params;
      } else {
        return null;
      }
    };
    const pathName = checkPath();
    const fetchedMovies = async () => {
      const typeOf = await datas(`${pathName}`, `&page=${pageNum}`);
      setMovies(typeOf.results);
    };

    fetchedMovies();
  }, [pageNum]);

  return (
    <div className="flex flex-col pt-10 w-full pb-19 items-center">
      <Cards
        movies={movies}
        name="Upcoming"
        ontoggle={true}
        setMovies={setMovies}
      />
      <PaginationDemo page={pageNum} setPage={setPageNum} />
    </div>
  );
}
