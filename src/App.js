import { List } from "./components/List";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <List />
      <ToastContainer />
    </>
  );
}

export default App;
