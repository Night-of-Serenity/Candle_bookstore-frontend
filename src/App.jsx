import Container from "./layouts/Container";
import Footer from "./layouts/Footer";
import Headers from "./layouts/Headers";
import Router from "./routes/Router";

function App() {
  return (
    <div className="flex flex-col">
      <div>
        <Headers />
      </div>
      <div className="flex-1 min-h-[100vh]">
        <Router />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
    // <Container />
  );
}

export default App;
