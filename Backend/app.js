import express from "express";
import "dotenv/config";
import logger from "morgan";
import cors from "cors";
import kidsRouter from "./routes/kids.js";
import cookieParser from "cookie-parser";

const app = express();

// -----database connection----
import { connectDB } from "./models/database.js";
connectDB();

//--------- Middleware-----------
app.use(logger("tiny"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ---------------Kids Routes--------------
app.use("/", kidsRouter);

// ---------Error Handling-------------
import genratedErrors from "./middlewares/Error.js";
app.use(genratedErrors);



// ---------Server Running-------------
app.listen(process.env.PORT, () => {
  console.log(`Server is start on ${process.env.PORT}`);
});
