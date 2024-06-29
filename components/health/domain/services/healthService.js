function checkDatabaseConnection() {
  return new Promise((resolve) => resolve(true));
}

module.exports = {
  checkDatabaseConnection,
};
