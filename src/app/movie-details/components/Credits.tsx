import { CreditsInfo } from "../../../../utils/get-credits";

type CreditsProps = {
  credits: CreditsInfo;
};

export const Credits = ({ credits }: CreditsProps) => {
  const cast = credits.cast.slice(0, 3);
  const crew = credits.crew;
  console.log(crew);
  const directing = crew.filter(
    (el) => el.known_for_department === "Directing",
  );
  const Writers = crew.filter((el) => el.known_for_department === "Writing");
  const Stars = cast.filter((el) => el.known_for_department === "Acting");

  return (
    <div className="pt-15 gap-6 w-full pb-9 flex flex-col">
      <div className="flex border-b pb-2">
        <h1 className="w-14 mr-12 font-bold">Director</h1>
        {directing.slice(0, 1).map((el) => {
          return <p key={el.id}>{el.name}</p>;
        })}
      </div>
      <div className="flex border-b pb-2">
        <h1 className="w-14 mr-12 font-bold">Writer</h1>
        {Writers.slice(0, 1).map((el) => {
          return <p key={el.id}>{el.name}</p>;
        })}
      </div>
      <div className="flex border-b pb-2">
        <h1 className="w-14 mr-12 font-bold">Stars</h1>
        {Stars.filter((p) => p.popularity > 1).map((el) => {
          return <p key={el.id}>{el.name}</p>;
        })}
      </div>
    </div>
  );
};
