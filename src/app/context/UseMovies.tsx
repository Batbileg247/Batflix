"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { datas } from "../../../utils/getData";

const MoviesContext = createContext();

const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [upcoming, setUpcoming] = useState([]);
  const [pageNum, setPageNum] = useState("1");

  useEffect(() => {
    const fetchedMovies = async () => {
      const upcomingMovies = await datas("upcoming", pageNum);
      setUpcoming(upcomingMovies);
    };

    fetchedMovies();
  }, [pageNum]);

  return (
    <MoviesContext.Provider value={{ upcoming, pageNum }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

export default MovieProvider;
