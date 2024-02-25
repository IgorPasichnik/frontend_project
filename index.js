import express from "express";
import bodyParser from "body-parser";

import { todoRouter } from "./routes/todoRouter.js";

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/todos", todoRouter);

server.listen(9500, () => {
  console.log("listening on port 9500");
});
