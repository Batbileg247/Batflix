import { getHomePageMovies } from "../../../utils/getData";
import { Cards } from "../_components/Cards";

export default async function Home() {
  const { popular } = await getHomePageMovies();

  return (
    <div className="flex flex-col pt-10 w-full pb-19 items-center">
      <Cards movies={popular} name="Popular" ontoggle={false} />
    </div>
  );
}