const { Router } = require("express");
const { getAllStudents,createClass,enroll } = require("../controllers/action.controllers");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { adminMiddleware } = require("../middlewares/admin.middleware");
const router = Router();

router.get("/students", getAllStudents);
router.post("/class", createClass);
router.post("/:id/enroll", enroll);
// router.get("/:id", getBlogById);
// router.post("/", createBlog);

// router.post("/:id/comment", createComment)
// router.delete("/:blogId/comment/:commentId", adminMiddleware, deleteComment)


module.exports = router;