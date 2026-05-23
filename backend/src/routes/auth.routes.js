const express = require("express");
const {
  register,
  login,
  logout,
  refreshToken,
  getProfile,
  updateProfile,
  deleteProfile,
  forgotPassword,
  resetPassword,
  verifyEmail,
} = require("../controllers/auth.controller");
const { authenticate } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", authenticate, getProfile);

// Advanced Auth Routes
router.patch("/profile", authenticate, updateProfile);
router.delete("/profile", authenticate, deleteProfile);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/verify-email", verifyEmail);

module.exports = router;
