import { QueryResult } from "pg";
import { db } from "../database/db.js";


async function listCompanies(): Promise<QueryResult> {
	return db.query(
		`SELECT company AS "bestCompany", COUNT(c.company) AS compliments FROM compliments c GROUP BY company ORDER BY company;`
	);
}
export {listCompanies}