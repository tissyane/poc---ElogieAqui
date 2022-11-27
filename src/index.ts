import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { createCompliment, findOneCompliment, listCompliments, removeCompliment, updateCompliment } from "./controllers/compliments-controller.js";
dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.get("/status", (req, res) => {
    res.send("Server is on");
  });

  server.post("/compliments", createCompliment)
  server.get("/compliments", listCompliments)
  server.get("/compliments/:id", findOneCompliment)
  server.delete("/compliments/:id", removeCompliment)
  server.put("/compliments/:id", updateCompliment)


server.listen(process.env.PORT, () => {console.log(`Server listening on port ${process.env.PORT}...`)});
