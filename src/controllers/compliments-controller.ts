import { Request, Response } from "express";
import { Compliment } from "../protocols/compliment.js";
import { deleteCompliment, getCompliments, insertCompliment } from "../repositories/compliments-repository.js";

async function createCompliment(req: Request, res: Response){
  const compliment = req.body as Compliment;
  
  try {
    await insertCompliment(compliment);
    res.send(`Your compliment was posted!`)    
  } catch (error) {
    res.sendStatus(500);
  }   
  }

  
async function listCompliments(req: Request, res: Response) {

  try {
    const result = await getCompliments()
    res.send(result.rows)
  } catch (error) {
    res.sendStatus(500);
  }  
}
  
async function removeCompliment(req: Request, res: Response) {

  const {id} = req.params;

  try {
    await deleteCompliment(id)
    res.send("Your compliment was successfully removed")
  } catch (error) {
     res.sendStatus(500);
  }
  
}



export {createCompliment, listCompliments, removeCompliment}