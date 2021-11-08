const router = require("express").Router();
const { theaters } = require("../controllers");

// router.use(require("../config/auth"));
router.get("/", theaters.index);
router.get("/:id", theaters.show);

module.exports = router;