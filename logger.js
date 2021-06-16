const EventEmitter = require('events') ;
emitter = new EventEmitter() ;


class Logger extends EventEmitter{
    log(message){

        console.log(message) ;
        this.emit("message logged" , {id: 1 , url: 'https://wtever.io'}) ;
    }
}

module.exports = Logger ;

