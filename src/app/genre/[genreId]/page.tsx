import { MoreLikeThis } from "@/app/movie-details/components/MoreLikeThis";
import { getMovieByGenre } from "../../../../utils/get-movies-by-genre";
import { getGenre } from "../../../../utils/get-genre";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, X } from "lucide-react";
import { PaginationDemo } from "@/app/_components/PaginationDemo";

const GenrePageLoader = async ({
  params,
  searchParams,
}: {
  params: Promise<{ genreId: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { genreId } = await params;
  const page = (await searchParams).page ?? "1";
  const { results } = await getMovieByGenre(genreId, page);
  const { genres } = await getGenre();

  return (
    <div className="flex max-w-8xl flex-col">
      <h1 className="pt-28 text-3xl px-5 pb-8">Search filter</h1>
      <div className="flex max-lg:flex-col">
        <div className="sm:w-xl w-screen p-5">
          <div>
            <div>
              <h1 className="text-2xl font-semibold">Genres</h1>
              <p>See lists of movies by genres</p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap pt-4">
            {genres.map((genre) => (
              <Link key={genre.id} href={`/genre/${genre.id}`}>
                <Badge
                  variant={genre.id == genreId ? "default" : "outline"}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  {genre.name}

                  {genre.id == genreId ? <X /> : <ChevronRight size={14} />}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
        <MoreLikeThis movies={results} name="" ontoggle={false} id="kk" />
      </div>
      <PaginationDemo genre={`genre/${genreId}`} page={page} />
    </div>
  );
};

export default GenrePageLoader;
