

const Dragon = require("./dragon");

const { REFRSH_RATE , SECONDS} = require("./config");

const refreshRate = REFRSH_RATE * SECONDS;

class Generation{

    constructor(){
        this.expiration = this.calculateExpiration();
    }

    calculateExpiration(){
        const expirationPeriod = Math.floor(Math.random()*(refreshRate/2))
        const msUntilExpiration = Math.random()<0.5?
        refreshRate-expirationPeriod:
        refreshRate + expirationPeriod;

        return new Data(Date.now()+msUntilExpiration);
    }

    newDragon(){
        if(Date.now()>this.expiration){
            throw new Error('This generation expired on '+this.expiration);
        }
        return new Dragon;
    }
}

module.expirationPeriod = Generation;