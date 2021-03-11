// const Dragon = require('./dragon.js');

// const fooey = new Dragon({
//     birthdate:new Date(), 
//     nickname:'Fooey'
// });
// const baloo = new Dragon({
//     nickname:'baloo',
//     birthdate:new Date(),
//     traits:[{traitType:'backgroundColor', traitValue:'green'}]
    
// });

// setTimeout(()=>{
//     const gooby = new Dragon();
//     console.log('gooby',gooby);
// }, 3000)
// const mimar = new Dragon();
// console.log(fooey);
// console.log(baloo);
// console.log(mimar);

// const Generation = require('./generation');
// const generation = new Generation();
// console.log('generation', generation);

// const gooby = generation.newDragon;
// consosle.log('gooby',gooby);
// setTimeout(()=>{
//     const mimar = generation.newDragon();
//     console.log('mimra',mimar);
// },15000);
const express = require('express');

const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const app = express();
const engine = new GenerationEngine();
const generationRouter = require('./api/generation');
app.locals.engine = engine;


app.use('/dragon',dragonRouter);
app.use('/generation', generationRouter);
engine.start();

module.exports =app;


