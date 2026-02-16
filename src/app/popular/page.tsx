import { getHomePageMovies } from "../../../utils/getData";
import { Cards } from "../_components/Cards";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default async function Popular({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const page = (await searchParams).page ?? "1";

  const { popular } = await getHomePageMovies(page);

  return (
    <div className="flex flex-col pt-10 w-full pb-19 items-center">
      <Cards movies={popular} name="Popular" ontoggle={false} />

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {["1", "2", "3"].map((pageNum) => (
            <PaginationItem>
              <PaginationLink
                href={`/popular?page=${pageNum}`}
                isActive={pageNum === page}
              >
                1
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
