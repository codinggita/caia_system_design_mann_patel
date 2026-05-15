const Prompt = require("../models/prompt.model");

// GET /api/v1/search?q=scaling — global keyword search across prompt, response, and metadata fields
const globalSearch = async (req, res) => {
    try {
        const keyword = req.query.q;

        if (!keyword) {
            return res.status(400).json({ success: false, message: "Query parameter 'q' is required" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // Case-insensitive regex to match the keyword
        const regex = new RegExp(keyword, "i");

        // Search across multiple fields using $or
        const filter = {
            $or: [
                { prompt: regex },
                { response: regex },
                { "metadata.concept": regex },
                { "metadata.category": regex },
                { "metadata.subcategory": regex },
            ],
        };

        const total = await Prompt.countDocuments(filter);

        if (total === 0) {
            return res.status(404).json({ success: false, message: "No results found" });
        }

        const results = await Prompt.find(filter).skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            count: results.length,
            total,
            page,
            totalPages: Math.ceil(total / limit),
            data: results,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// GET /api/v1/search/title?q=redis — search inside prompt (title) field only
const searchByTitle = async (req, res) => {
    try {
        const keyword = req.query.q;

        if (!keyword) {
            return res.status(400).json({ success: false, message: "Query parameter 'q' is required" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const filter = { prompt: new RegExp(keyword, "i") };

        const total = await Prompt.countDocuments(filter);

        if (total === 0) {
            return res.status(404).json({ success: false, message: "No results found for this title search" });
        }

        const results = await Prompt.find(filter).skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            count: results.length,
            total,
            page,
            totalPages: Math.ceil(total / limit),
            data: results,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// GET /api/v1/search/content?q=database — search inside response field only
const searchByContent = async (req, res) => {
    try {
        const keyword = req.query.q;

        if (!keyword) {
            return res.status(400).json({ success: false, message: "Query parameter 'q' is required" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const filter = { response: new RegExp(keyword, "i") };

        const total = await Prompt.countDocuments(filter);

        if (total === 0) {
            return res.status(404).json({ success: false, message: "No results found for this content search" });
        }

        const results = await Prompt.find(filter).skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            count: results.length,
            total,
            page,
            totalPages: Math.ceil(total / limit),
            data: results,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// GET /api/v1/search/tags?q=caching — search inside metadata.concept (tags) field
const searchByTags = async (req, res) => {
    try {
        const keyword = req.query.q;

        if (!keyword) {
            return res.status(400).json({ success: false, message: "Query parameter 'q' is required" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const filter = { "metadata.concept": new RegExp(keyword, "i") };

        const total = await Prompt.countDocuments(filter);

        if (total === 0) {
            return res.status(404).json({ success: false, message: "No results found for this tag search" });
        }

        const results = await Prompt.find(filter).skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            count: results.length,
            total,
            page,
            totalPages: Math.ceil(total / limit),
            data: results,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// GET /api/v1/search/patterns?q=CQRS — search inside metadata.subcategory (patterns) field
const searchByPatterns = async (req, res) => {
    try {
        const keyword = req.query.q;

        if (!keyword) {
            return res.status(400).json({ success: false, message: "Query parameter 'q' is required" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const filter = { "metadata.subcategory": new RegExp(keyword, "i") };

        const total = await Prompt.countDocuments(filter);

        if (total === 0) {
            return res.status(404).json({ success: false, message: "No results found for this pattern search" });
        }

        const results = await Prompt.find(filter).skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            count: results.length,
            total,
            page,
            totalPages: Math.ceil(total / limit),
            data: results,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

module.exports = {
    globalSearch,
    searchByTitle,
    searchByContent,
    searchByTags,
    searchByPatterns,
};
