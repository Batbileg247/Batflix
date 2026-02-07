import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type PaginationProps = {
  page: number
  setPage: (page: number) => void
}

export function PaginationDemo({ page, setPage }: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage(Math.max(page - 1, 1))}
          />
        </PaginationItem>

        {[1, 2, 3].map((num) => (
          <PaginationItem key={num}>
            <PaginationLink
              isActive={page === num}
              onClick={() => setPage(num)}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={() => setPage(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
