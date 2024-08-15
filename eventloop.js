const fs = require('fs');
const crypt = require('crypto');

process.env.uv_THREADPOOL_SIZE = 1;
const start = Date.now();

console.log("bap is here");
setTimeout(()=> console.log("timer is out 1 " , 0));
setImmediate(()=> console.log("immediate 1")); 

fs.readFile('simple.txt', ()=>{
    console.log("file is read");
    setTimeout(()=> console.log("timer is out 2 ", 0))
    setImmediate(()=> console.log("immediate 2"))
    process.nextTick(()=> console.log("ticked"))
})

crypt.pbkdf2('password','salt' , 100000 , 1024 , 'sha512', ()=>{
    console.log(Date.now() - start , "password is encrypted");
})
crypt.pbkdf2('password','salt' , 100000 , 1024 , 'sha512', ()=>{
    console.log(Date.now() - start ,"password is encrypted");
})
crypt.pbkdf2('password','salt' , 100000 , 1024 , 'sha512', ()=>{
    console.log(Date.now() - start ,"password is encrypted");
})
crypt.pbkdf2('password','salt' , 100000 , 1024 , 'sha512', ()=>{
    console.log(Date.now() - start ,"password is encrypted");
})
crypt.pbkdf2('password','salt' , 100000 , 1024 , 'sha512', ()=>{
    console.log(Date.now() - start ,"password is encrypted");
})