const { Router } = require("express");
const router = new Router();

router.get("/", (req, res) => {
  res.json({ generation: req.app.locals.engine.generation });
}); // get requre for current generation data

module.exports = router;
