const router = require("express").Router();
const { orders } = require("../controllers");

// router.use(require("../config/auth"));
router.get("/", orders.index);
router.get("/:id", orders.show);
router.post("/", orders.create);
router.put("/:id", orders.update);
router.delete("/:id", orders.destroy);

module.exports = router;