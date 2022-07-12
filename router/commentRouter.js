// const express = require("express");
// const commentController = require("../controller/commentController");
// //const authMiddleware = require("../middlewares/auth-middleware");
// const router = express.Router();

// // router.get("/:postId", authMiddleware, commentController.readComment); 
// router.get("/:postId",  commentController.readComment); 

// // router.post("/:postId", authMiddleware, commentController.writeComment); 
// router.post("/:postId", commentController.writeComment); 

// // router.put("/:postId/:commentId", authMiddleware, commentController.updateComment);
// router.put("/:postId/:commentId", commentController.updateComment);

// // router.delete("/:postId/:commentId", authMiddleware, commentController.deleteComment);
// router.delete("/:postId/:commentId", commentController.deleteComment);

// module.exports = router;
