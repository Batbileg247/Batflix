import { CreditsInfo } from "../../../../utils/get-credits";

type CreditsProps = {
  credits: CreditsInfo;
};

export const Credits = ({ credits }: CreditsProps) => {
  const cast = credits.cast.slice(0, 3);
  const crew = credits.crew;
  const directing = crew.filter(
    (el) => el.job === "Director",
  );
  const Writers = crew.filter((el) => el.department === "Writing");
  const Stars = cast.filter((el) => el.known_for_department === "Acting");

  return (
    <div className="pt-15 gap-6 w-full pb-9 flex flex-col">
      <div className="flex border-b pb-2">
        <h1 className="w-14 mr-12 font-bold">Director</h1>
        {directing.map((el) => el.name).join(" • ")}
      </div>
      <div className="flex border-b pb-2">
        <h1 className="w-14 mr-12 font-bold">Writer</h1>
        {Writers.slice(0, 3).map((el) => el.name).join(" • ")}
      </div>
      <div className="flex border-b pb-2">
        <h1 className="w-14 mr-12 font-bold">Stars</h1>
        {Stars.map((el) => el.name).join(" • ")}
      </div>
    </div>
  );
};
