const router = require('express').Router();

// ===== These routes are being prepended by api/ in server.js

router.use("/auth", require("./auth"));
router.use("/users", require("./users"));
router.use("/order", require("./orders"));
router.use("/theaters", require("./theaters"));

module.exports = router;