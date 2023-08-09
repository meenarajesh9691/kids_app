import React, { useState } from "react";
import Navbar from "@/components/Navbar";
// import Router from "next/router";
import { kidsLogin } from "@/store/Action/KidsActions";
import { useDispatch } from "react-redux";

// import {useRouter} from "next/navigation"

const login = () => {
  // const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [admin, setAdmin] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const kidsEmail = {
      email,
      password,
    };
    dispatch(kidsLogin(kidsEmail));
  };

  return (
    <>
      <div className="box">
        <Navbar />
        <div className=" form_div bg-light  d-flex flex-column align-items-center position-absolute  top-50 start-50 translate-middle   ">
          <h1 className="">Login</h1>
          <form method="POST">
            <div className="mt-4 mb-4">
              <input
                type="email"
                className="input form-control"
                name="email"
                placeholder="Email"
                // onChange={handleForm}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 mb-4">
              <input
                type="password"
                className="input form-control"
                name="password"
                placeholder="Password"
                // onChange={handleForm}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="container-fluid text-center">
              <button
                type="submit"
                onClick={loginHandler}
                className="btn btn-success btn-lg  "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
