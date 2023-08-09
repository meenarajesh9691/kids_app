import mongoose from "mongoose";
const kidsSchema = new mongoose.Schema(
  {
    fullname: {
      type:String,
      required:[true, "Please Enter Name"]
    },
    phone: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    // userType: String,
    userType:String
  },
  { timestamps: true }
);

export const kidsDetails = mongoose.model("kidsdetails", kidsSchema);