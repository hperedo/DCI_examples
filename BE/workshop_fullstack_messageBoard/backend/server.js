import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import connect from "./lib/db.js";
import createError from "http-errors";
import userRouter from "./routes/userRouter.js";
import cors from 'cors'
import messageRouter from "./routes/messageRouter.js";
import checkAuth from "./middlewares/checkAuth.js";
const server = express();
dotenv.config();
connect();
server.use(cors())
server.use(express.json())
server.use(logger("dev"));

server.use('/api/v1/users',userRouter)
server.use('/api/v1/messages',checkAuth  ,  messageRouter)


//// page not found middleware
server.use((req, res, next) => {
  next(createError(404, "PAGE NOT FOUND !!!"));
});

/////Global Error Handler
server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || "Something went Wrong!" });
});

const port = process.env.PORT || 7000;
server.listen(port, () => {
  console.log(`Server is running on :http://localhost:${port}`);
});
