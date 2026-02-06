"use client";

import { Cards } from "./_components/Cards";
import { NowPlaying } from "./_components/Nowplayin";

export default function Home() {
  return (
    <div className=" flex flex-col w-full items-center">
      <NowPlaying />
      <Cards name={"Upcoming"} page={"/upcoming"} toggle=""/>
      <Cards name={"Popular"} page={"/popular"} toggle=""/>
      <Cards name={"Top rated"} page={"/top-rated"} toggle=""/>
    </div>
  );
}
