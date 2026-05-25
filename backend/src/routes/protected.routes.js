const express = require("express");
const router = express.Router();

// Import middlewares
const { authenticate } = require("../middlewares/auth.middleware");
const { authorizeAdmin } = require("../middlewares/admin.middleware");

// Import controllers
const {
    getProtectedConcepts,
    createProtectedConcept,
    updateProtectedConcept,
    deleteProtectedConcept,
    getAdminDashboard
} = require("../controllers/protected.controller");

// Protected Concept Routes (Requires Authentication)
router.get("/protected/concepts", authenticate, getProtectedConcepts);
router.post("/protected/concepts", authenticate, createProtectedConcept);
router.patch("/protected/concepts/:id", authenticate, updateProtectedConcept);
router.delete("/protected/concepts/:id", authenticate, deleteProtectedConcept);

// Admin Protected Dashboard (Requires Authentication + Admin Role)
router.get("/admin/protected/dashboard", authenticate, authorizeAdmin, getAdminDashboard);

module.exports = router;
