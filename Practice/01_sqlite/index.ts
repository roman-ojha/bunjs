import { Database } from "bun:sqlite";

// const db = new Database(":memory:");
// const query = db.query("select 'Hello world' as message;");
// console.log(query.get());

const db = new Database("db.sqlite", { create: true });

const query = db.query(`
  CREATE TABLE user(
    id INT AUTO INCREMENT,
    name CHAR(50) NOT NULL
  );
`);
query.run();
