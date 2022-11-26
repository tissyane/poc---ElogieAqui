import { Request, Response } from "express";
import { Compliment } from "../protocols/compliment.js";
import { getCompliments, postCompliment } from "../repositories/compliments-repository.js";

async function insertCompliment(req: Request, res: Response){
  const compliment = req.body as Compliment
    const result = await postCompliment(compliment);
    res.send(`Your compliment was posted!`)
  }

  
async function listCompliments(req: Request, res: Response) {
  const result = await getCompliments()
  res.send(result.rows)
}
  
  export {insertCompliment, listCompliments}