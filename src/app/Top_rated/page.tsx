"use client";

import { useEffect, useState } from "react";
import { Cards } from "../_components/Cards";
import { Movie } from "../page";
import { datas } from "../../../utils/getData";
import { PaginationDemo } from "../_components/Pagnition";

export default function Home() {
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const fetchedMovies = async () => {
      const topRated = await datas("top_rated", pageNum);
      setTopRated(topRated.results);
    };
    
    fetchedMovies();
  }, [pageNum]);

  return (
    <div className="flex flex-col pt-10 w-full pb-19 items-center">
      <Cards movies={topRated} name="Top_rated" ontoggle={false} />
      <PaginationDemo page={pageNum} setPage={setPageNum} />
    </div>
  );
}
