const http = require('http') ;


//responds to event acc to request
const server = http.createServer((req , res) =>{

    // we try to avoid multiple if 
    // we will use express instead of http
    if(req.url == '/'){
        res.write("hello world") ;
        res.end() ;
    }
    if(req.url == '/wt'){
        res.write("what") ;
        res.end() ;
    }
}) ;

//raises a event when something happens on port 3000
server.listen(3000) ;
console.log("listening on port 3000") ;