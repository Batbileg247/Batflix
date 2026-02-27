import { MoreLikeThis } from "@/app/movie-details/components/MoreLikeThis";
import { getMovieByGenre } from "../../../utils/get-movies-by-genre";
import { getGenre } from "../../../utils/get-genre";
import { GenreMap } from "./component/GenreMap";

const GenrePageLoader = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const genreId = resolvedSearchParams.genre ?? "";
  const { results } = await getMovieByGenre(genreId, "1");
  const { genres } = await getGenre();
  const currentGenreIds = genreId.split(",");

  const isSelectedGenre = (id: string) => currentGenreIds.includes(id);

  const remainingGenres = (selectedGenreId: string) =>
    currentGenreIds.filter(
      (currentGenreId) => currentGenreId !== selectedGenreId,
    );

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
            <GenreMap genres={genres} currentGenreIds={currentGenreIds} isSelectedGenre={isSelectedGenre} remainingGenres={remainingGenres} />
          </div>
        </div>
        <MoreLikeThis movies={results} name="" ontoggle={false} id="kk" />
      </div>
    </div>
  );
};

export default GenrePageLoader;
