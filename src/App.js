import "./App.css";
import { Fragment } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { useSelector } from "react-redux";
function App() {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  return (
    <Fragment>
      <div className="App">
          {!isLoggedin && <Login />}
          {isLoggedin && <Home />}
      </div>
    </Fragment>
  );
}

export default App;
