import { Pagination } from "@/components/ui/pagination";
import { getSimiliarMovies } from "../../../../utils/get-more-like";
import { MoreLikeThis } from "@/app/movie-details/components/MoreLikeThis";

const MoreLikeThisPageLaoder = async ({
  params
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;
  const { results } = await getSimiliarMovies(movieId, "1");

  return (
    <div className="pt-15">
      <MoreLikeThis movies={results} name="More like this" ontoggle={false} id="kk" />
      <Pagination />
    </div>
  );
};

export default MoreLikeThisPageLaoder;
