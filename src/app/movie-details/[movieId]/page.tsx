import { Cards } from "@/app/_components/Cards";
import { getMovieById } from "../../../../utils/get-movie-by-id";
import { MovieDetailsSection } from "../components/MovieDetail";

const MovieDetailPageLaoder = async ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;
  const movie = await getMovieById(movieId);

  return (
    <div>
      <MovieDetailsSection movie={movie} />
      {/* <Cards movies={movieId} name="Upcoming" ontoggle={false}/> */}
    </div>
  );
};

export default MovieDetailPageLaoder;
