import { QueryResult } from "pg";
import { db } from "../database/db.js";
import { Compliment } from "../protocols/compliment.js";



async function postCompliment(compliment: Compliment): Promise<QueryResult<Compliment>> {

    return db.query(`INSERT INTO compliments ("author", description, "company")
    VALUES ($1, $2, $3)`, [
      compliment.author, compliment.description, compliment.company
    ]);
}

async function getCompliments(): Promise<QueryResult> {
  return db.query(`SELECT * FROM compliments`)
 
}


export {postCompliment, getCompliments}