import { protect } from "./utils/auth";
import authRouter from "./router/auth";
import express from "express";
import router from "./router/router";
import morgan from "morgan";
import cors from "cors";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRouter);

app.use("/api", protect, router);
// app.use("/api", router);
export default app;
