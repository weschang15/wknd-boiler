const express = require("express");
const { handleGetHealth } = require("./controllers/healthController");
const router = express.Router();

// API Route CRUD or other resource paths
router.get("/", handleGetHealth);

module.exports = { router };
