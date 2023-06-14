import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function Container() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 min-h-screen flex">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
