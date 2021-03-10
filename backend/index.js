const Dragon = require('./dragon.js');

const fooey = new Dragon({
    birthdate:new Date(), 
    nickname:'Fooey'
});
const baloo = new Dragon({
    nickname:'baloo',
    birthdate:new Date
    
});

setTimeout(()=>{
    const gooby = new Dragon();
    console.log('gooby',gooby);
}, 3000)
const mimar = new Dragon();
console.log(fooey);
console.log(baloo);
console.log(mimar);