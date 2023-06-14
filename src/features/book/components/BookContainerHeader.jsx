// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function BookContainerHeader() {
  const urlPath = useLocation().pathname.split("/");
  const genres = useSelector((state) => state.book.genresList);
  // console.dir(genres);

  const pageTitle = urlPath.includes("genres")
    ? genres.find((genre) => genre?.id === +urlPath[urlPath.length - 1]).genre
    : urlPath[urlPath.length - 1].toUpperCase();

  // const pageTitle = urlPath[urlPath.length - 1].toUpperCase();
  return (
    <div className="h-[150px] w-full flex justify-center items-center">
      <h1 className="text-3xl text-slate-600">{pageTitle ? pageTitle : ""}</h1>
    </div>
  );
}
