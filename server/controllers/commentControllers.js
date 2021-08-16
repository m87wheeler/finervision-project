const connectDb = require("../database/connectDb");

// method   POST
// route    api/post
// desc
const postComment = async (req, res) => {
  const { first_name, surname, email, phone, gender, dob, mob, yob, comments } =
    req.body;

  // TODO use Object.keys to increment and return failed key value in error
  // ! check for extra inputs which may be invalid
  if (
    !first_name ||
    !surname ||
    !email ||
    !phone ||
    !gender ||
    !dob ||
    !mob ||
    !yob ||
    !comments
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Complete all required fields." });
  }

  /** connect to database */
  let db = connectDb();

  try {
    /** */
    let values = Object.values(req.body);
    let placeholders = values.map((_) => "?").join(",");
    let sql = `INSERT INTO user_comments (first_name, surname, email, phone, gender, dob, mob, yob, comments) VALUES ( ${placeholders} )`;

    /** */
    db.run(sql, [...values], (error) => {
      if (error)
        return res.status(500).json({ success: false, message: error.message });
      res.status(201).json({
        success: true,
        message: `Thank you, ${first_name}. Your comments have been successfully submitted!`,
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  } finally {
    db.close();
  }
};

// method   GET
// route   /api/get
// desc
const getPosts = async (req, res) => {
  /** connect to database */
  let db = connectDb();
  try {
    db.all("SELECT * from user_comments", (error, rows) => {
      if (error) {
        return res.status(500).json({ success: false, message: error.message });
      }
      return res.status(200).json({ success: true, data: rows });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  } finally {
    db.close();
  }
};

module.exports = { postComment, getPosts };
