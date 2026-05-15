const express = require("express");
const router = express.Router();

const {
    globalSearch,
    searchByTitle,
    searchByContent,
    searchByTags,
    searchByPatterns,
} = require("../controllers/search.controller");

// --- Search routes ---
router.get("/", globalSearch);
router.get("/title", searchByTitle);
router.get("/content", searchByContent);
router.get("/tags", searchByTags);
router.get("/patterns", searchByPatterns);

module.exports = router;
