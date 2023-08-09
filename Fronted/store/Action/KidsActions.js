import axios from "../../axiosconfig.js";
import Router from "next/router.js";
// import { SetKids, RemoveKids } from "../Reducers/KidsReducer.js";

// ------------------Kids Signup ----------------------

export const kidsSignup = (kids) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/signup", kids);
    Router.push("/login/kidsLogin");
    console.log(res.data);
    if (res.data.message === "Kids Created Successfully!") {
      alert("Kids Created Successfully!");
    }
  } catch (error) {
    if (error.response.data.message === "Kids Alredy Exist") {
      alert("Kids Alredy Exist");
    }
    // console.log(error.response.data);
  }
};

// ------------------ Kids Login ------------------

export const kidsLogin = (kidsEmail) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/login", kidsEmail);
    console.log(res.data);

    if (res.data.success === true) {
      alert("kids login successfully");
      window.localStorage.setItem("token", res.data.token);
      window.localStorage.setItem("loggedIn", true);
      Router.push("/kidsData");
    } else if (res.data.status === "invalid") {
      alert("Invalid Password");
    }
  } catch (error) {
    // console.log(error);
    if (
      error.response.data.message === "Kids Not Found With This Email Address"
    ) {
      alert("Kids Not Found With This Email Address");
    }
  }
};

//------------------- Kids All Data ----------------

export const kidsData =
  ([setAdmin, setUserdata]) =>
  async (dispatch, getState) => {
    try {
      const res = await axios.post("/kidsData", {
        token: window.localStorage.getItem("token"),
      });
      // console.log(res.data.userDetails.userType);
      // console.log(res);

      if (res.data.userDetails.userType === "Admin") {
        setAdmin(true);
      }
      setUserdata(res.data.userDetails);
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.data.message === "jwt expired") {
        alert("Token Expired Login Again");
        Router.push("/login/kidsLogin");
      }
    }
  };
