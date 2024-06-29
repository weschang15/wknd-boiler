const express = require("express");
const healthRoutes = require("./health/entry-points/api/routes");

const api = express();
// global config
api.set("port", process.env.PORT || 6173);

// API Route resource paths
api.use("/health", healthRoutes.router);

module.exports = api;
