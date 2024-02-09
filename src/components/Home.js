import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./redux/authSlice";
const Home = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logoutHandler = () =>{
    dispatch(authAction.logout());
  }
  return (
    <Fragment>
      <div>
        <h1>Welcome {user.name}</h1>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </Fragment>
  );
};

export default Home;
