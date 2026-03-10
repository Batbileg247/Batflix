import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { getHomePageMovies } from "../../../utils/getData";
import { Cards } from "../_components/Cards";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const page = Number((await searchParams).page ?? 1);
  const { upcoming, upcomingPageNum } = await getHomePageMovies(String(page));

  const getPageNumbers = [(page > 1 ? page-1 : page), (page > 1 ? page : page+1), (page > 1 ? page+1 : page+2)]

  return (
    <div className="flex flex-col pt-10 w-full pb-19 items-center">
      <Cards movies={upcoming} name="Upcoming" ontoggle={false} />
      <>
        <Pagination className="flex center pb-5">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="dark:text-white dark:bg-neutral-900"
                href={page > 1 ? `/upcoming?page=${page - 1}` : "#"}
              />
            </PaginationItem>
            {getPageNumbers.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  className="dark:text-white"
                  href={`/upcoming?page=${pageNumber}`}
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
                  page < upcomingPageNum
                    ? `/upcoming?page=${page + 1}`
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
