import React, { useEffect, useState } from "react";
import { kidsData } from "@/store/Action/KidsActions";
import { useDispatch } from "react-redux";
// import Router from "next/router.js";
// import Profile from "../../components/Profile.js";
import Subject from "@/components/Subject.js";

const kids = () => {
  const dispatch = useDispatch();
  const [userdata, setUserdata] = useState("");
  const [admin, setAdmin] = useState(false);
  // console.log(userdata);
  console.log(admin);
  // console.log(setAdmin);

  const dataHandler = async (e) => {
    dispatch(kidsData([setAdmin, setUserdata]));
  };

  useEffect(() => {
    dataHandler();
  }, []);

  console.log(admin);

  return <>{admin ? <h1>"Wellcome Admin Dashboard"</h1> : <Subject />}</>;
};

export default kids;
