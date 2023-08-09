import errorHandler from "../utils/errorHandler.js";
import { CatchAsyncError } from "../middlewares/CatchAsyncErrors.js";
import { kidsDetails } from "../models/kidsSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

//---------------- Kids Signup ------------------------

export const kidsSignup = CatchAsyncError(async (req, res, next) => {
  const { fullname, phone, email, password, userType } = req.body;
  // const oldKids = await kidsDetails.findOne({ email });
  // if (oldKids) {
  //   // return res.json({ error: "Kids Alredy Exist" });

  const encryptedPassword = await bcrypt.hash(password, 10);

  const kids = await kidsDetails.create({
    fullname: fullname,
    phone: phone,
    email: email,
    password: encryptedPassword,
    userType: userType,
  });
  // res.send(kids);
  res.status(201).json({ message: "Kids Created Successfully!", kids });
});

//---------------------------- Kids Login -----------------

export const kidsLogin = CatchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const kids = await kidsDetails.findOne({ email: email });
  if (!kids) {
    return next(
      new errorHandler("Kids Not Found With This Email Address", 400)
    );
  }
  const isMatch = await bcrypt.compare(password, kids.password);
  if (isMatch) {
    const token = jwt.sign({ email: kids.email }, process.env.JWT_SECRET, {
      expiresIn: 10,
    });

    if (token) {
      return res.json({ success: true, email: kids.email, token });
    }
  }
  res.json({ status: "invalid", error: "Invalid Password" });
});

// ------------kidsdetails Post API ------------

export const kidsData = CatchAsyncError(async (req, res) => {
  const { token } = req.body;
  const user = jwt.verify(token, process.env.JWT_SECRET);
  const userEmail = user.email;
  const userDetails = await kidsDetails.findOne({ email: userEmail });
  // console.log(userDetails);
  res.send({ status: "ok", userDetails: userDetails });
});
