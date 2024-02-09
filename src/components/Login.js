import React, { Fragment, useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { authAction } from "./redux/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authAction.login({name: form.name, email: form.email, password: form.password}));
  };

  return (
    <Fragment>
      <div className="card">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="input name"
            value={form.name}
            onChange={inputHandler}
          />
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            className="input email"
            onChange={inputHandler}
            value={form.email}
          />
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            className="input password"
            onChange={inputHandler}
            value={form.password}
          />

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
