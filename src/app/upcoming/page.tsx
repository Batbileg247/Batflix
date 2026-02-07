"use client";

import { useEffect, useState } from "react";
import { Cards } from "../_components/Cards";
import { Movie } from "../page";
import { datas } from "../../../utils/getData";
import { PaginationDemo } from "../_components/Pagnition";

export default function Home() {
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const fetchedMovies = async () => {
      const upcoming = await datas("upcoming", pageNum);
      setUpcoming(upcoming.results);
    };

    fetchedMovies();
  }, [pageNum]);

  return (
    <div className="flex flex-col pt-10 w-full pb-19 items-center">
      <Cards movies={upcoming} name="Upcoming" ontoggle={false} />
      <PaginationDemo page={pageNum} setPage={setPageNum} />
    </div>
  );
}
