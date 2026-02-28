import { MoreLikeThis } from "@/app/movie-details/components/MoreLikeThis";
import { getMovieByGenre } from "../../../utils/get-movies-by-genre";
import { getGenre } from "../../../utils/get-genre";
import { GenreMap } from "./component/GenreMap";
import { getSearchValue } from "../../../utils/get-search";

const GenrePageLoader = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const genreId = resolvedSearchParams.genre ?? "";
  const searchInput = resolvedSearchParams.q ?? "";
  const getByGenre = await getMovieByGenre(genreId, "1");
  const getBySearch = await getSearchValue(searchInput, "1");
  const { genres } = await getGenre();

  const toggle = searchInput === "";

  const movies = toggle ? getByGenre.results : getBySearch.results;

  const currentGenreIds = genreId.split(",");

  const isSelectedGenre = (id: string) => currentGenreIds.includes(id);

  const remainingGenres = (selectedGenreId: string) =>
    currentGenreIds.filter(
      (currentGenreId) => currentGenreId !== selectedGenreId,
    );
  const totalResults = toggle
    ? getByGenre.total_results
    : getBySearch.total_results;

  const selectedGenreIds = currentGenreIds.map((id) => Number(id));
  const selectedGenres = genres.filter((g) => selectedGenreIds.includes(g.id));
  const activeGenreNames = selectedGenres.map((g) => g.name).join(", ");

  return (
    <div>
      <h1 className="pt-28 text-3xl px-5 pb-8">
        {toggle ? "Search filter" : "Search results"}
      </h1>
      <div className="flex flex-row max-lg:flex-col">
        <div className="max-w-xl w-full p-5">
          <div>
            <h1 className="text-2xl font-semibold">Genres</h1>
            <p>See lists of movies by genres</p>
          </div>
          <div className="flex gap-4 flex-wrap pt-4">
            <GenreMap
              genres={genres}
              currentGenreIds={currentGenreIds}
              isSelectedGenre={isSelectedGenre}
              remainingGenres={remainingGenres}
            />
          </div>
        </div>
        <div>
          {toggle ? (
            <h1 className="flex px-10">
              {totalResults} titles in “{activeGenreNames}”
            </h1>
          ) : (
            <h1 className="flex px-10">
              {totalResults} results for “{searchInput}”
            </h1>
          )}
          <MoreLikeThis movies={movies} name="" ontoggle={false} id="kk" />
        </div>
      </div>
    </div>
  );
};

export default GenrePageLoader;
