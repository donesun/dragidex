//can't have a circular dependency.. like file c requires file b, but file b requires file a... sooo..
//we bind expressions
const { Router } = require("express");

const DragonTable = require("../../dragon/table");
const router = new Router();

router.get("/new", (req, res, next) => {
  const dragon = req.app.locals.engine.generation.newDragon();
  DragonTable.storeDragon(dragon)
    .then(({ dragonId }) => {
      console.log("dragonId", dragonId);

      dragon.dragonId = dragonId;
      res.json({ dragon });
    })
    .catch(error => next(error));
});

module.exports = router;
