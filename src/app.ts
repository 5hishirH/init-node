import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: process.env.ORIGIN_URL, credentials: true }));

app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(cookieParser());

// import routes

import sampleRouter from "./routes/sample.routes";

app.use("/api/v1/sample", sampleRouter);

export default app;