import { getMovieById } from "../../../../utils/get-movie-by-id";
import { MovieDetailsSection } from "../components/MovieDetail";
import { MoreLikeThis } from "../components/MoreLikeThis";
import { getSimiliarMovies } from "../../../../utils/get-more-like";

const MovieDetailPageLaoder = async ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;
  const movie = await getMovieById(movieId);
  const { results } = await getSimiliarMovies(movieId, "1");

  return (
    <div className="pb-20">
      <MovieDetailsSection movie={movie} />
      <MoreLikeThis
        movies={results}
        name="More like this"
        ontoggle={true}
        id={movieId}
      />
    </div>
  );
};

export default MovieDetailPageLaoder;
