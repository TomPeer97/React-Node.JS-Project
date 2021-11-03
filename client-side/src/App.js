import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SinglePageAppComp from "../src/components/Navigation/NavigationApp";
import Footer from "./pages/footer";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { getMeData } from "./helpers/FetchHelper";

function App() {
  const [user, set] = useState({});

  useEffect(() => {
    getMeData(localStorage.getItem("token"), (data) => {
      set(data);
    });
  }, []);

  return (
    <div className="App">
      <>
        {user && user.id}

        <SinglePageAppComp set={set} user={user}></SinglePageAppComp>

        <ToastContainer></ToastContainer>
        <Footer></Footer>
      </>
    </div>
  );
}

export default App;
