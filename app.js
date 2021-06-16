
const EventEmitter = require('events') ;

emitter = new EventEmitter() ;

emitter.on("message logged" , (arg) => {
    console.log("Listener Called" , arg) ;
})


// Raise : logging message , {data}
emitter.emit("message logged" , {id: 1 , url: 'https://wtever.io'}) ;