import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { kidsSignup } from "@/store/Action/KidsActions";
import Navbar from "@/components/Navbar";

const signup = () => {
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const SubmitHandler = (e) => {
    if (userType === "Admin" && secretKey != "raj") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();
      const kids = {
        fullname,
        phone,
        email,
        password,
        userType,
      };
      dispatch(kidsSignup(kids));
    }
  };

  return (
    <>
      <div className="box">
        <Navbar />

        <div className="form_div bg-light  d-flex flex-column align-items-center position-absolute  top-50 start-50 translate-middle ">
          <h1 className="">Signup</h1>

          <div className="w-100 d-flex justify-content-evenly alert alert-success ">
            Register As
            <input
              type="radio"
              value="User"
              name="userType"
              onChange={(e) => {
                setUserType(e.target.value);
              }}
            />
            User
            <input
              type="radio"
              value="Admin"
              name="userType"
              onChange={(e) => {
                setUserType(e.target.value);
              }}
            />
            Admin
          </div>

          <form>
            {userType === "Admin" ? (
              <div className=" mt-4 mb-4">
                <input
                  type="text"
                  className="  form-control "
                  placeholder="Secret Key "
                  // onChange={handleForm}
                  onChange={(e) => {
                    setSecretKey(e.target.value);
                  }}
                />
              </div>
            ) : null}

            <div className=" mt-4 mb-4">
              <input
                type="text"
                className=" input form-control "
                placeholder="Full Name "
                name="fullname"
                // onChange={handleForm}
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </div>
            <div className=" mt-4 mb-4">
              <input
                type="phone"
                className="input form-control  "
                placeholder="Mobile Number "
                name="phone"
                // onChange={handleForm}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className=" mt-4 mb-4">
              <input
                type="email"
                className="input form-control "
                placeholder="Email Id"
                name="email"
                // onChange={handleForm}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className=" mt-4 mb-4">
              <input
                type="password"
                className="input form-control "
                placeholder="Password"
                name="password"
                // onChange={handleForm}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="container-fluid text-center">
              <button
                type="submit"
                className="btn btn-outline-success btn-lg p-20px"
                onClick={SubmitHandler}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
