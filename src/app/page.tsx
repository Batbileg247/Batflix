import { Cards } from "./_components/Cards";
import { NowPlaying } from "./_components/Nowplayin";
import { getHomePageMovies } from "../../utils/getData";

export default async function Home() {
  const { upcoming, popular, top_rated, now_playing } = await getHomePageMovies();

  return (
    <div className="flex flex-col w-full items-center">
      <NowPlaying movies={now_playing} />
      <Cards movies={upcoming} name="Upcoming" ontoggle={true} />
      <Cards movies={popular} name="Popular" ontoggle={true} />
      <Cards movies={top_rated} name="Top rated" ontoggle={true} />
    </div>
  );
}
