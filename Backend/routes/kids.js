import express from "express";
import {
  kidsData,
  kidsSignup,
  kidsLogin,
} from "../controllers/kidsController.js";

const router = express.Router();



// ------------------Singnup Post API---------------

router.post("/signup", kidsSignup);
router.post("/login", kidsLogin);
router.post("/kidsData", kidsData);

export default router;
