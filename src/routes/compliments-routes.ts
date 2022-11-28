import express from "express";
import { createCompliment, findOneCompliment, listCompliments, removeCompliment, updateCompliment } from "../controllers/compliments-controller.js";

const complimentsRouter = express.Router();

complimentsRouter.post("/compliments", createCompliment)
complimentsRouter.get("/compliments", listCompliments)
complimentsRouter.get("/compliments/:id", findOneCompliment)
complimentsRouter.delete("/compliments/:id", removeCompliment)
complimentsRouter.put("/compliments/:id", updateCompliment)

export { complimentsRouter };
