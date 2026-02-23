import { getHomePageMovies } from "../../../utils/getData";
import { Cards } from "../_components/Cards";
import { PaginationDemo } from "../_components/PaginationDemo";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const page = (await searchParams).page ?? "1";
  const { upcoming } = await getHomePageMovies(page);

  return (
    <div className="flex flex-col pt-10 w-full pb-19 items-center">
      <Cards movies={upcoming} name="Upcoming" ontoggle={false} />
      <PaginationDemo page={page} genre={"upcoming"} />
    </div>
  );
}
