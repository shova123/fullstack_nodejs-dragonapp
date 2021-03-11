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

const GenerationEngine = require('./engine');

const engine = new GenerationEngine();

engine.start();

setTimeout(()=>{

    engine.stop();
},20000);

