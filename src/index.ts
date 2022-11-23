import express from "express";
import dotenv from "dotenv";
dotenv.config();

const server = express();
server.use(express.json());

server.get("/status", (req, res) => {
    res.send("Server is on");
  });

server.listen(process.env.PORT, () => {console.log(`Server listening on port ${process.env.PORT}...`)});
