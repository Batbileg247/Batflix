import { MoreLikeThis } from "@/app/movie-details/components/MoreLikeThis";
import { getMovieByGenre } from "../../../utils/get-movies-by-genre";
import { getGenre } from "../../../utils/get-genre";
import { GenreMap } from "./component/GenreMap";
import { getSearchValue } from "../../../utils/get-search";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const GenrePageLoader = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const genreId = resolvedSearchParams.genre ?? "";
  const searchInput = resolvedSearchParams.q ?? "";
  const page = Number((await searchParams).page ?? 1);
  const getByGenre = await getMovieByGenre(genreId, String(page));
  const getBySearch = await getSearchValue(searchInput, String(page));
  const { genres } = await getGenre();
  const toggle = searchInput === "";

  const movies = toggle ? getByGenre.results : getBySearch.results;

   const total_results = toggle ? getByGenre.total_results : getBySearch.total_results

  const total_pages = toggle ? getByGenre.total_pages : getBySearch.total_pages;

  const currentGenreIds = genreId.split(",");

  const isSelectedGenre = (id: string) => currentGenreIds.includes(id);

  const remainingGenres = (selectedGenreId: string) =>
    currentGenreIds.filter(
      (currentGenreId) => currentGenreId !== selectedGenreId,
    );

  const selectedGenreIds = currentGenreIds.map((id) => Number(id));
  const selectedGenres = genres.filter((g) => selectedGenreIds.includes(g.id));
  const activeGenreNames = selectedGenres.map((g) => g.name).join(", ");
  const filteredMovie = movies.filter((m) => m.poster_path !== null);

  const getPageNumbers = [
    page > 1 ? page - 1 : page,
    page > 1 ? page : page + 1,
    page > 1 ? page + 1 : page + 2,
  ];

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
              {total_results} titles in “{activeGenreNames}”
            </h1>
          ) : (
            <h1 className="flex px-10">
              {total_results} results for “{searchInput}”
            </h1>
          )}
          <MoreLikeThis
            movies={filteredMovie}
            name=""
            ontoggle={false}
            id="kk"
          />
          <>
            <Pagination className="flex center pb-5">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="dark:text-white dark:bg-neutral-900"
                    href={page > 1 ? `/search?genre=${genreId}&page=${page - 1}` : "#"}
                  />
                </PaginationItem>
                {getPageNumbers.map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      className="dark:text-white"
                      href={`/search?genre=${genreId}&page=${pageNumber}`}
                      isActive={pageNumber === page}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    className="dark:text-white dark:bg-neutral-900"
                    href={
                      page < total_pages ? `/search?genre=${genreId}&page=${page + 1}` : "#"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        </div>
      </div>
    </div>
  );
};

export default GenrePageLoader;
