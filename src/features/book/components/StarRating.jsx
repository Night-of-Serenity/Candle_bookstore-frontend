/* eslint-disable react/prop-types */
import { StarIconFill, StarIconNone } from "../../../icons";

export default function StarRating({ rating = 0, className }) {
  if (rating > 5) {
    rating = 5;
  }
  const ratingArr = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating)
      ratingArr.push(
        <StarIconFill
          className={className}
          key={`(${i + Math.random() * 10}`}
        />
      );
    else
      ratingArr.push(
        <StarIconNone
          className={className}
          key={`(${i + Math.random() * 10}`}
        />
      );
  }
  return <div className="flex">{ratingArr}</div>;
}
