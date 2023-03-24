import express from "express";
import { messageRouter } from "./routes/messageRoute.js";
import cors from "cors";
import logger from "./middleware/logger.js";
import { checkApiKey } from "./middleware/checkApiKey.js";
const app = express();

app.use(express.json());

app.use(cors());

app.use(logger);
app.use(checkApiKey);
///     /messages

app.use("/messages", messageRouter);

////////
app.use("*", (req, res) => {
  res.status(404).send({ error: "resource not found!!!!" });
});

/////gloabl error handler always must be the last endpoint

app.use((err, req, res, next) => {
  console.log(err);
  res.status(401).send({ error: err });
});

app.listen(4000, () => {
  console.log("Server is running on : http://localhost:4000");
});
