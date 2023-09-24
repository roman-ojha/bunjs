import express from "express";
import DB from "./db/db";

const app = express();
const PORT = 8080;

const db = new DB().db;

// const query = db.query(`
// INSERT INTO user(name) values ('razz roman');
// `);
//
// query.run();

const query = db.query(`
SELECT * FROM user;
`);
query.run();
console.log(query.all());

// app.listen(() => {
//   console.log(`Running on http://localhost:${PORT}`);
// });
