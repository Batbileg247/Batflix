import { PaginationDemo } from "@/app/_components/PaginationDemo";
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
  const page = (await searchParams).page ?? "1";

  const { results } = await getSimiliarMovies(movieId, page);

  return (
    <div className="pt-15">
      <MoreLikeThis
        movies={results}
        name="More like this"
        ontoggle={false}
        id="kk"
      />
      <PaginationDemo genre={`more_like_this/${movieId}`} page={page} />
    </div>
  );
};

export default MoreLikeThisPageLaoder;
