const { Router } = require("express");
const router = Router();

const { login, register } = require("../controllers/auth.contollers")

router.post("/login", login);
router.post("/register", register);

module.exports = router;