import { QueryResult } from "pg";
import { db } from "../database/db.js";
import { Compliment } from "../protocols/compliment.js";



async function insertCompliment(compliment: Compliment): Promise<QueryResult> {

    return db.query(`INSERT INTO compliments ("author", description, "company")
    VALUES ($1, $2, $3)`, [
      compliment.author, compliment.description, compliment.company
    ]);
}

async function getCompliments(): Promise<QueryResult<Compliment>> {
  return db.query(`SELECT * FROM compliments`)
 
}


async function  deleteCompliment(id: string): Promise<QueryResult> {
  return db.query(`DELETE FROM compliments WHERE id = $1;`, [id]);
  
}


export {insertCompliment, getCompliments, deleteCompliment}