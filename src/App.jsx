import { useDispatch, useSelector } from "react-redux";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchGenresAsync } from "./store/slices/bookslice";
import { fetchCartAsync } from "./store/slices/cartSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  // const fetchGenres = async () => {
  //   try {
  //     await dispatch(fetchGenresAsync());
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // fetchGenres();
  dispatch(fetchGenresAsync());

  useEffect(() => {
    dispatch(fetchCartAsync());
  }, [user]);
  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" theme="dark" autoClose={3000} />
    </div>
  );
}

export default App;
