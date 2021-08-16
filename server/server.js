const connectDb = require("./database/connectDb");
const createTable = require("./database/createTable");
const express = require("express");
const cors = require("cors");

/** instantiate server */
const server = express();

/** middleware */
server.use(express.json());
server.use(
  cors({
    origin: "*",
  })
);

/** connect to user_comments database */
let db = connectDb();
createTable(db);

/** routes */
server.use("/api", require("./routes/commentRoutes"));

/** run server */
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
