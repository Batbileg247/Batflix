import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getSimiliarMovies } from "../../../../utils/get-more-like";
import { MoreLikeThis } from "@/app/movie-details/components/MoreLikeThis";
import { useState } from "react";

const GenrePageLoader = async ({
  params,
}: {
  params: Promise<{ genreId: string }>;
}) => {
  const { genreId } = await params;
  const { results } = await getSimiliarMovies(genreId, "1");

  const [page, setPage] = useState(1);

  return (
    <div className="pt-15">
      <MoreLikeThis
        movies={results}
        name="More like this"
        ontoggle={false}
        id="kk"
      />
      <PaginationDemo />
    </div>
  );
};

export default GenrePageLoader;

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {[1, 2, 3].map((pageNum : number) => (
          <PaginationItem>
            <PaginationLink href="#">{pageNum}</PaginationLink>
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
  );
}
