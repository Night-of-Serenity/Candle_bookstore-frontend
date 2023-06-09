import defaultImage from "../assets/default/blank.png";

export default function Avatar({ src }) {
  return (
    <div className="avatar max-w-full">
      <div className="w-24 rounded-full">
        <img src={src || defaultImage} />
      </div>
    </div>
  );
}
