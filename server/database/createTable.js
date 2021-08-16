const createTable = (db) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS user_comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name VARCHAR(50) NOT NULL,
      surname VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      phone VARCHAR(15) NOT NULL,
      gender VARCHAR(50) NOT NULL,
      dob VARCHAR(2) NOT NULL,
      mob VARCHAR(2) NOT NULL,
      yob VARCHAR(4) NOT NULL,
      comments VARCHAR(255) NOT NULL
    )
  `;
  db.run(sql);
  console.log("user_comments table created...");
  db.close();
};

module.exports = createTable;
