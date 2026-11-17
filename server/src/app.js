import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

const app = express();




// app.use(helmet()); 
// For development purpose, we are not using helmet because it will block some requests from the client side. So, we are not using helmet in development mode.

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);


app.use(cookieParser());


// app.use("/api/v1");





export default app;