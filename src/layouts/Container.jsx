import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function Container({ children }) {
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>
      <div className="flex-1 min-h-[100vh]">{children}</div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
