import { useDispatch } from "react-redux";
import heroImage from "../assets/carourel/Landscrap/carousel10.jpg";
import { fetchBestsellerAsync } from "../store/slices/bookslice";
import { useNavigate } from "react-router-dom";

export default function HeroContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

          <button
            onClick={() => {
              dispatch(fetchBestsellerAsync());
              navigate("/filter/bestseller");
            }}
            className="btn btn-primary"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
