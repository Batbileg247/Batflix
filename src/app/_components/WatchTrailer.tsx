import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const WatchTrailer = () => {
  return (
    <div>
      <Button
        variant="outline"
        className="sm:shadow-[0px_0px_10px_rgba(0,0,0,0.2)] backdrop-brightness-80 dark:backdrop-blur-sm h-10 cursor-pointer absolute left-5 bottom-5"
      >
        <Play />
        <p>Play trailer</p>
        <p>2:10</p>
      </Button>
    </div>
  );
};
