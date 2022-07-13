const router = require("express").Router();
const postCtl = require("../controller/post");
const commentCtl = require("../controller/comment");
// const authorization = require("../middlewares/auth-middlewares.js");


router.post("/",   postCtl.postArticle);
router.get("/", postCtl.getBoard);
router.get("/:postId", postCtl.getArticle);
router.delete("/:postId", postCtl.deleteArticle);

router.post("/:postId/comments",  commentCtl.postComment);
router.put(
  "/:postId/comments/:commentId",
  
  commentCtl.updateComment
);
router.delete(
  "/:postId/comments/:commentId",
  
  commentCtl.deleteComment
);

module.exports = router;
