import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
};

export function PaginationDemo({ page, setPage }: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <PaginationPrevious onClick={() => setPage(Math.max(page - 1, 1))} />
        </PaginationItem>

        {[1, 2, 3].map((num) => (
          <PaginationItem
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            key={num}
          >
            <PaginationLink
              isActive={page === num}
              onClick={() => setPage(num)}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <PaginationNext onClick={() => setPage(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
