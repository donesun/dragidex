//can't have a circular dependency.. like file c requires file b, but file b requires file a... sooo..
//we bind expressions
const { Router } = require("express");
const router = new Router();

router.get("/new", (req, res) => {
  res.json({ Dragon: req.app.locals.engine.generation.newDragon() });
});

module.exports = router;
