import { useDispatch } from "react-redux";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchGenresAsync } from "./store/slices/bookslice";

function App() {
  const dispatch = useDispatch();

  const fetchGenres = async () => {
    try {
      await dispatch(fetchGenresAsync());
    } catch (err) {
      console.log(err.message);
    }
  };
  fetchGenres();

  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" theme="dark" autoClose={3000} />
    </div>
  );
}

export default App;
