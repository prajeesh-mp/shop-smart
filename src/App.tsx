import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/Routes";
import { initDB } from "./services/db.service";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  const handleInitDB = async () => {
    await initDB();
  };

  useEffect(() => {
    handleInitDB();
  }, []);

  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
