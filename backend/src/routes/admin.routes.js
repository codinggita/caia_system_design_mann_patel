const express = require("express");
const {
    getAllUsers,
    getUserById,
    updateUserRole,
    banUser,
    unbanUser,
    getAuditLogs,
    getSystemHealth,
    getSystemLogs,
    clearCache,
    toggleMaintenance,
} = require("../controllers/admin.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorizeAdmin } = require("../middlewares/admin.middleware");

const router = express.Router();

// All admin routes require authentication + admin role
// authenticate -> checks if user is logged in (valid JWT)
// authorizeAdmin -> checks if logged-in user has "admin" role

// User Management Routes
router.get("/users", authenticate, authorizeAdmin, getAllUsers);
router.get("/users/:id", authenticate, authorizeAdmin, getUserById);
router.patch("/users/:id/role", authenticate, authorizeAdmin, updateUserRole);
router.patch("/users/:id/ban", authenticate, authorizeAdmin, banUser);
router.patch("/users/:id/unban", authenticate, authorizeAdmin, unbanUser);

// System Admin Routes
router.get("/logs", authenticate, authorizeAdmin, getAuditLogs);
router.get("/system/health", authenticate, authorizeAdmin, getSystemHealth);
router.get("/system/logs", authenticate, authorizeAdmin, getSystemLogs);
router.delete("/cache/clear", authenticate, authorizeAdmin, clearCache);
router.post("/system/maintenance", authenticate, authorizeAdmin, toggleMaintenance);

module.exports = router;
