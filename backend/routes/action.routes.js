const { Router } = require("express");
const { getAllStudents,createClass,enroll,uploadFiles } = require("../controllers/action.controllers");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { adminMiddleware } = require("../middlewares/admin.middleware");
const router = Router();

router.get("/students", getAllStudents);
router.post("/class", createClass);
router.post("/:id/enroll", enroll);
router.post("/:id/upload", uploadFiles);
uploadFiles
// router.get("/:id", getBlogById);
// router.post("/", createBlog);

// router.post("/:id/comment", createComment)
// router.delete("/:blogId/comment/:commentId", adminMiddleware, deleteComment)


module.exports = router;