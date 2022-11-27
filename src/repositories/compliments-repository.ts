import { QueryResult } from "pg";
import { db } from "../database/db.js";
import { Compliment } from "../protocols/compliment.js";



async function insertCompliment(compliment: Compliment): Promise<QueryResult> {

    return db.query(`INSERT INTO compliments (author, description, company)
    VALUES ($1, $2, $3)`, [
      compliment.author, compliment.description, compliment.company
    ]);
}

async function getAllCompliments(): Promise<QueryResult<Compliment>> {
  return db.query(`SELECT * FROM compliments`)
 
}

async function selectCompliment(id: string): Promise<QueryResult<Compliment>> {
  return db.query(`SELECT * FROM compliments WHERE id = $1;`, [id])
 
}


async function  deleteCompliment(id: string): Promise<QueryResult> {
  return db.query(`DELETE FROM compliments WHERE id = $1;`, [id]);
  
}

async function updateOne(compliment: Compliment, id: string): Promise<QueryResult<Compliment>>  {
  return db.query(`UPDATE compliments SET author = $2, description = $3, company = $4 WHERE id=$1;`,
 [ id, compliment.author, compliment.description, compliment.company ]);
}

export {insertCompliment, getAllCompliments, selectCompliment, deleteCompliment, updateOne}
