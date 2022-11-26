import { Request, Response } from "express";
import { Compliment } from "../protocols/compliment.js";
import { postCompliment } from "../repositories/compliments-repository.js";

async function insertCompliment(req: Request, res: Response){
  const compliment = req.body as Compliment
    const result = await postCompliment(compliment);
    res.send(`Your compliment was posted:${result.rows}`)
  }


  
  export {insertCompliment}