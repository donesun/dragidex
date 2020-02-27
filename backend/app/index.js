const Dragon = require("../dragon/index");
const express = require("express");
const dragonRouter = require("./api/dragon");

const GenerationEngine = require("./generation/engine");
const app = express();

const engine = new GenerationEngine();
const generationRouter = require("./api/generation");
// const fooey = new Dragon({
//   birthdate: new Date(),
//   nickname: 'fooey'})

// const bloo = new Dragon({
//   birthdate: new Date(),
//   nickname: 'bloo',
//   traits: [{
//     traitType:'backgroundColodfsdfr',
//     traitValue:'green'
//   }]
// })

// const treeny = new Dragon();

// setTimeout( () => {
//   const sunny = new Dragon();
//   console.log('sunny', sunny)
// }, 3000)

// console.log("vishy", vishy);
// console.log('bloo', bloo)
// console.log('treeny', treeny)

// const Generation = require("./generation");
// const generation = new Generation();

// console.log('generation', generation);

// const gooby = generation.newDragon();
// console.log('gooby',gooby)

//Generation Engine

app.locals.engine = engine; //app.locals field. now router has access to the .engine
app.use("/dragon", dragonRouter); //basically getting the app.get('/dragon/new) from dragon.js in api folder. './dragon is the default route and dragonRouter is the required from api/dragon
app.use("/generation", generationRouter);

app.use((err, res, req, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    type: "error",
    message: err.message
  });
});
engine.start();

//routing -- request is where data we grab stored. response = where we define what data the req responds back to server

module.exports = app;
