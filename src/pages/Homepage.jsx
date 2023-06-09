import Content from "../layouts/Content";
import Sidebar from "../layouts/Sidebar";

export default function Homepage() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1">
        <Content />
      </div>
    </div>
  );
}
