import { MoreLikeThis } from "@/app/movie-details/components/MoreLikeThis";
import { getMovieByGenre } from "../../../../utils/get-movies-by-genre";
import { getGenre } from "../../../../utils/get-genre";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const GenrePageLoader = async ({
  params,
}: {
  params: Promise<{ genreId: string }>;
}) => {
  const { genreId } = await params;
  const { results } = await getMovieByGenre(genreId, "1");
  const { genres } = await getGenre();

  return (
    <div className="pt-15 flex">
      <div className="sm:w-xl w-screen p-5">
        <div>
          <div className="pb-4 border-b">
            <h1 className="text-2xl font-semibold">Genres</h1>
            <p>See lists of movies by genres</p>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap pt-4">
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
        </div>
      </div>
      <MoreLikeThis movies={results} name="" ontoggle={false} id="kk" />
    </div>
  );
};

export default GenrePageLoader;