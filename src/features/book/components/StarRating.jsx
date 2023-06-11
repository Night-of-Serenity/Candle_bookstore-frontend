/* eslint-disable react/prop-types */
import { StarIconFill, StarIconNone } from "../../../icons";

export default function StarRating({ rating = 0 }) {
  if (rating > 5) {
    rating = 5;
  }
  const ratingArr = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) ratingArr.push(<StarIconFill />);
    else ratingArr.push(<StarIconNone />);
  }
  return <div className="flex">{ratingArr}</div>;
}
