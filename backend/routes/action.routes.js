const { Router } = require("express");
const { getAllStudents, getClassesOfStudent,createClass,enroll,uploadFiles,applyWithdrawal,getFilesByClass,getClassStudents,getWithdrawals,updateStatusWithdrawal,getAllClasses } = require("../controllers/action.controllers");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { adminMiddleware } = require("../middlewares/admin.middleware");
const router = Router();

router.get("/students",authMiddleware, adminMiddleware, getAllStudents);
router.get("/classes",authMiddleware, adminMiddleware, getAllClasses);
router.get("/:id/myclasses",authMiddleware, getClassesOfStudent);
router.post("/class",authMiddleware, adminMiddleware, createClass);
router.post("/:id/enroll",authMiddleware, enroll);
router.post("/:id/upload",authMiddleware, adminMiddleware, uploadFiles);
router.post("/:id/withdraw",authMiddleware, applyWithdrawal);
router.get("/files",authMiddleware, getFilesByClass);
router.get("/:id/students",authMiddleware, adminMiddleware, getClassStudents);
router.get("/all_withdrawals",authMiddleware, adminMiddleware, getWithdrawals);
router.post("/:id/update_withdrawal",authMiddleware, adminMiddleware, updateStatusWithdrawal);

module.exports = router;