import { Badge } from "@/components/ui/badge";
import { MovieDetails } from "../../../../utils/get-movie-by-id";
import { Credits } from "./Credits";
import { getCreditsInfoById } from "../../../../utils/get-credits";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { getVideosById } from "../../../../utils/get-videos";
import { WatchTrailer } from "@/app/_components/WatchTrailer";

type MovieDetailProps = {
  movie: MovieDetails;
};

export const MovieDetailsSection = async ({ movie }: MovieDetailProps) => {
  const credits = await getCreditsInfoById(movie.id);
  const trailers = await getVideosById(movie.id);

  const trailer =
    trailers.results.find(
      (t) => t.site === "YouTube" && t.type === "Trailer" && t.official,
    ) ||
    trailers.results.find(
      (t) => t.site === "YouTube" && t.type === "Trailer",
    ) ||
    trailers.results.find((t) => t.site === "YouTube");

  const formattedDate =
    movie?.release_date?.toString().replaceAll("-", ".") ?? "N/A";
  const rate = movie.vote_count / 1000;

  return (
    <div className="pt-15 w-full flex flex-col items-center">
      <header className="flex justify-between w-270">
        <div className="flex flex-col">
          <h1 className="text-[36px] font-bold">{movie.title}</h1>
          <p className="text-lg">
            {formattedDate} • {Math.floor(movie.runtime / 60)}h{" "}
            {movie.runtime % 60}m
          </p>
        </div>
        <div>
          <p className="text-xs">Rating</p>
          <div className="flex items-center">
            <img
              src="/starwhite.png"
              alt="star"
              className="h-7 aspect-square hidden dark:block"
            />
            <img
              src="/star.png"
              alt="star"
              className="h-7 aspect-square block dark:hidden"
            />
            <div className="pl-0.5">
              <div className="flex items-center text-lg">
                {movie.vote_average.toFixed(1)}
                <p className="text-[#acacac] text-base">/10</p>
              </div>
              <div className="text-[#acacac] text-sm">{rate.toFixed(1)}K</div>
            </div>
          </div>
        </div>
      </header>
      <section className="h-107 mb-8 overflow-hidden w-270 gap-8 justify-between flex">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          className="w-1/4 h-full object-cover"
        />
        {trailer ? (
          <WatchTrailer movie={movie} trailer={trailer} />
        ) : (
          <div className="relative flex flex-col-reverse w-full">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=""
              className="flex flex-col w-full h-61.5 sm:h-full sm:absolute sm:-z-10"
            />
          </div>
        )}
      </section>
      <footer className="w-270">
        <div className="flex gap-3">
          {movie.genres.map((genre) => (
            <Badge key={genre.id} variant="secondary">
              {genre.name}
            </Badge>
          ))}
        </div>
        <div>{movie.overview}</div>
        <Credits credits={credits} />
      </footer>
    </div>
  );
};
