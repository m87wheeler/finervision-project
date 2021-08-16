const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const connectDb = () => {
  try {
    let db = new sqlite3.Database(
      path.join(__dirname, "user_comments.db"),
      (error) => {
        if (error) {
          throw new Error(error.message);
        }
        console.log("Connected to user_comments database...");
      }
    );
    return db;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDb;
