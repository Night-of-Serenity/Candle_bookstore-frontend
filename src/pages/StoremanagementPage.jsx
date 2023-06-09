import BookStock from "../features/book/components/BookStock";
import Sidebar from "../layouts/Sidebar";

export default function StoremanagementPage() {
  return (
    <>
      <Sidebar />
      <main className="flex flex-col w-5/6 min-h-screen mx-auto">
        <BookStock />
      </main>
    </>
  );
}
