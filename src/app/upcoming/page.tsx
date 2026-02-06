"use client";

import { Cards } from "../_components/Cards";

export default function Home() {
  return (
    <div className="pt-10 flex flex-col w-full items-center">
      <Cards name="Popular" page="/" toggle="hidden" />

    </div>
  );
}