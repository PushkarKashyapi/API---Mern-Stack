const http = require('http'); 

// creating the server // 
const Server  = http.createServer((req , res) =>{
    res.end('hello from my side on new server');
});

Server.listen(8000 , '127.0.0.1' , ()=>{
    console.log("listning to the server ");
});