import Sidebar from "../layouts/Sidebar";
import Content from "../layouts/Content";

export default function FilterPage({ pageTitle }) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1">
        <Content pageTitle={pageTitle} />
      </div>
    </div>
  );
}
