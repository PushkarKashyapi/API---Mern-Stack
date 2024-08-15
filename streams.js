const fs = require('fs'); 
const http = require('http');

const server = http.createServer();
server.on('request' , (req , res)=>{
   /* fs.readFile("./txt/real.txt", (err , data) =>{
        res.end(data);
    })
        */
       // solution 2  // 
      /* 
       const readable =   fs.createReadStream('./txt/real.txt')
      readable.on('data' , chunk =>{
        res.write(chunk);

      })
        readable.on('error' , err =>{
            res.write(err)})
        */

      //sol 3 // 
      const readable = fs.createReadStream('./txt/real.txt')
      readable.pipe(res);

      

})
server.listen(8000 , '127.0.0.1' , ()=>{
    console.log("listening on");
})