
const EventEmitter = require('events') ;

emitter = new EventEmitter() ;

emitter.on("message logged" , function (){
    console.log("Listener Called") ;
})

emitter.emit("message logged") ;