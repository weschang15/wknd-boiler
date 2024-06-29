const {
  checkDatabaseConnection,
} = require("../../domain/services/healthService");

async function handleGetHealth(req, res, next) {
  try {
    const healthStatus = await checkDatabaseConnection();
    return res.status(200).json({ ok: healthStatus });
  } catch (err) {
    return res.status(500).json({ ok: false });
  }
}

module.exports = {
  handleGetHealth,
};
