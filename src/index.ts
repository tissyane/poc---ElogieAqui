import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { createCompliment, listCompliments, removeCompliment } from "./controllers/compliments-controller.js";
dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.get("/status", (req, res) => {
    res.send("Server is on");
  });

  server.post("/compliments", createCompliment)
  server.get("/compliments", listCompliments)
  server.delete("/compliments/:id", removeCompliment)


server.listen(process.env.PORT, () => {console.log(`Server listening on port ${process.env.PORT}...`)});
