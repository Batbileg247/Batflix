import { getHomePageMovies } from "../../../utils/getData";
import { Cards } from "../_components/Cards";

export default async function Home() {
  const { top_rated } = await getHomePageMovies();

  return (
    <div className="flex flex-col pt-10 w-full pb-19 items-center">
      <Cards movies={top_rated} name="Top rated" ontoggle={false} />
    </div>
  );
}
