import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { getAccessToken } from "./utils/localstorage.js";
import { fetchMeAsync } from "./store/slices/authSlice.js";

if (getAccessToken()) {
  store.dispatch(fetchMeAsync());
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);
