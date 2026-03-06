import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getSimiliarMovies } from "../../../../utils/get-more-like";
import { MoreLikeThis } from "@/app/movie-details/components/MoreLikeThis";

const MoreLikeThisPageLaoder = async ({
  params,
  searchParams,
}: {
  params: Promise<{ movieId: string; page: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { movieId } = await params;
  const page = Number((await searchParams).page ?? 1);

  const { results, total_pages } = await getSimiliarMovies(
    movieId,
    String(page),
  );

  const getPageNumbers = [
    page > 1 ? page - 1 : page,
    page > 1 ? page : page + 1,
    page > 1 ? page + 1 : page + 2,
  ];

  return (
    <div className="pt-15">
      <MoreLikeThis
        movies={results}
        name="More like this"
        ontoggle={false}
        id="kk"
      />
      <>
        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="dark:text-white dark:bg-neutral-900"
                href={page > 1 ? `/more_like_this/${movieId}?page=${page - 1}` : "#"}
              />
            </PaginationItem>
            {getPageNumbers.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  className="dark:text-white"
                  href={`/more_like_this?${movieId}?page=${pageNumber}`}
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
                  page < total_pages
                    ? `/more_like_this/${movieId}?page=${page + 1}`
                    : "#"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </>
    </div>
  );
};

export default MoreLikeThisPageLaoder;
