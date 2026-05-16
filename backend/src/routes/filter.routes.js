const express = require("express");
const {
    filterByCategory,
    filterByDifficulty,
    filterByPattern,
    filterByLanguage,
    filterByDate,
} = require("../controllers/filter.controller");

const router = express.Router();

router.get("/category", filterByCategory);
router.get("/difficulty", filterByDifficulty);
router.get("/pattern", filterByPattern);
router.get("/language", filterByLanguage);
router.get("/date", filterByDate);

module.exports = router;
