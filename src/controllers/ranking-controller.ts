import { Request, Response } from "express";
import { listCompanies } from "../repositories/ranking-repository.js";

async function getRanking(req: Request, res: Response) {
  try {
    const ranking = await listCompanies();

    return res.send(ranking.rows);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export {getRanking}