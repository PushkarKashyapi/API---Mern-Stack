const http = require('http'); 
const url = require('url');

// creating the server // 
const Server  = http.createServer((req , res) =>{
    const path = req.url;
    if(path ==='/' || path === 'overview'){
        res.end("this is an overview");
    } 
    if(path === '/product'){
            res.end('this is product');
    } else{
                res.writeHead(404 , {
                    'Content-type': 'text/html'
                });
            }
        
    
    res.end('<h1>hello from my side on new server<h1>');
});

// listening to the server // 
Server.listen(8000 , '127.0.0.1' , ()=>{
    console.log("listning to the server ");
});