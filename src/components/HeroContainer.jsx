import { Link } from "react-router-dom";
import heroImage from "../assets/carourel/Landscrap/carousel10.jpg";
export default function HeroContainer() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Kindle Your Knowledge at Candle
          </h1>
          <p className="mb-5">
            Ignite your imagination and expand your horizons with our curated
            collection of captivating books. Join our community of book lovers
            and embark on a journey of enlightenment. Discover the magic of
            knowledge at Candle Bookshop!
          </p>
          <Link to="filter/bestseller">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
