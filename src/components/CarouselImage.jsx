/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CarouselImage({ id, src, preLink, nextLink }) {
  return (
    <div id={id} className="carousel-item relative w-full">
      <img src={src} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <Link to={preLink} className="btn btn-circle">
          ❮
        </Link>
        <Link to={nextLink} className="btn btn-circle">
          ❯
        </Link>
      </div>
    </div>
  );
}
