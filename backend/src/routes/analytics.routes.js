const express = require("express");
const router = express.Router();

const {
    getTotalConcepts,
    getCategoryDistribution,
    getDifficultyStats,
    getTopPatterns,
    getTopLanguages,
    getTopViewedConcepts,
    getTopBookmarkedConcepts,
    getTrendingAnalytics,
    getMonthlyGrowth,
    getTopSearchedKeywords,
    getFailedSearches,
    getUserEngagement,
    getApiPerformance,
    getDatabasePerformance,
    getCacheHitRate
} = require("../controllers/analytics.controller");

// ==========================================
// ANALYTICS ROUTES
// ==========================================

// Matches: /api/v1/analytics/total-concepts
router.get("/total-concepts", getTotalConcepts);

// Matches: /api/v1/analytics/category-distribution
router.get("/category-distribution", getCategoryDistribution);

// Matches: /api/v1/analytics/difficulty-stats
router.get("/difficulty-stats", getDifficultyStats);

// Matches: /api/v1/analytics/patterns/top
router.get("/patterns/top", getTopPatterns);

// Matches: /api/v1/analytics/languages/top
router.get("/languages/top", getTopLanguages);

// Matches: /api/v1/analytics/views/top
router.get("/views/top", getTopViewedConcepts);

// Matches: /api/v1/analytics/bookmarks/top
router.get("/bookmarks/top", getTopBookmarkedConcepts);

// Matches: /api/v1/analytics/trending
router.get("/trending", getTrendingAnalytics);

// Matches: /api/v1/analytics/growth
router.get("/growth", getMonthlyGrowth);

// Matches: /api/v1/analytics/searches/top
router.get("/searches/top", getTopSearchedKeywords);

// Matches: /api/v1/analytics/searches/failed
router.get("/searches/failed", getFailedSearches);

// Matches: /api/v1/analytics/engagement
router.get("/engagement", getUserEngagement);

// Matches: /api/v1/analytics/api-performance
router.get("/api-performance", getApiPerformance);

// Matches: /api/v1/analytics/database-performance
router.get("/database-performance", getDatabasePerformance);

// Matches: /api/v1/analytics/cache-hit-rate
router.get("/cache-hit-rate", getCacheHitRate);

module.exports = router;
