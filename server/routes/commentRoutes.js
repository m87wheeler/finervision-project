const router = require("express").Router();

const { postComment, getPosts } = require("../controllers/commentControllers");

router.post("/post", postComment).get("/get", getPosts);

module.exports = router;
