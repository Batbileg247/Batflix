import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export type PageType = {
  page: string;
  genre: string;
};

export const PaginationDemo = ({ page, genre }: PageType) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {["1", "2", "3"].map((pageNum) => (
          <PaginationItem key={pageNum}>
            <PaginationLink
              href={`/${genre}?page=${pageNum}`}
              isActive={pageNum === page}
            >
              {pageNum}
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
  );
};
