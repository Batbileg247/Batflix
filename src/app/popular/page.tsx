import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getHomePageMovies } from "../../../utils/getData";
import { Cards } from "../_components/Cards";

export default async function Popular({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const page = Number((await searchParams).page ?? 1);

  const { popular, popularPageNum } = await getHomePageMovies(String(page));


  const getPageNumbers = [(page > 1 ? page-1 : page), (page > 1 ? page : page+1), (page > 1 ? page+1 : page+2)]

  return (
    <div className="flex flex-col pt-10 w-full pb-19 items-center">
      <Cards movies={popular} name="Popular" ontoggle={false} />
      <>
        <Pagination className="flex center pb-5">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="dark:text-white dark:bg-neutral-900"
                href={page > 1 ? `/popular?page=${page - 1}` : "#"}
              />
            </PaginationItem>
            {getPageNumbers.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  className="dark:text-white"
                  href={`/popular?page=${pageNumber}`}
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
                  page < popularPageNum
                    ? `/popular?page=${page + 1}`
                    : "#"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </>
    </div>
  );
}
