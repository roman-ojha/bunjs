import { Database } from "bun:sqlite";

class DB {
  db = new Database("db.sqlite", { create: true });
  constructor() {
    this.createDB();
  }

  createDB() {
    try {
      this.db.query(`
        SELECT * FROM user;
      `);
    } catch (err) {
      const query = this.db.query(`
      CREATE TABLE user(
        id INT AUTO INCREMENT,
        name CHAR(50) NOT NULL
      );
    `);
      query.run();
    }
  }
}

export default DB;
