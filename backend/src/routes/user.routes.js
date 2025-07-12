const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/me", auth, getMe);

module.exports = router;
