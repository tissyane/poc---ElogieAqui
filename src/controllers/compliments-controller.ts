import { Request, Response } from "express";
import { Compliment } from "../protocols/compliment.js";
import { deleteCompliment, getAllCompliments, insertCompliment, selectCompliment, updateOne } from "../repositories/compliments-repository.js";

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
    const result = await getAllCompliments()
    res.send(result.rows)
  } catch (error) {
    res.sendStatus(500);
  }  
}

async function findOneCompliment(req: Request, res: Response) {
  const {id} = req.params;

  try {
    const selectedCompliment = await selectCompliment(id)
    if(selectedCompliment.rowCount < 1) {
      return res.sendStatus(404)
    }
    res.send(selectedCompliment.rows)
  } catch (error) {
    res.sendStatus(500);
  }
}
  
async function removeCompliment(req: Request, res: Response) {
  const {id} = req.params;

  try {
    const selectedCompliment = await selectCompliment(id)
    if(selectedCompliment.rowCount < 1) {
      return res.sendStatus(404)
    }
    await deleteCompliment(id)
    res.send("Your compliment was successfully removed")
  } catch (error) {
     res.sendStatus(500);
  }
  
}

async function updateCompliment(req: Request, res: Response) {
  const { id } = req.params;
  const compliment = req.body as Compliment;

  try {
    const selectedCompliment = await selectCompliment(id)
    if(selectedCompliment.rowCount < 1) {
      return res.sendStatus(404)
    }

      await updateOne(compliment, id);
      res.sendStatus(200);
      
  } catch (error) {
      console.log(error)
      res.sendStatus(500);
  }
}



export {createCompliment, listCompliments, findOneCompliment, removeCompliment, updateCompliment}