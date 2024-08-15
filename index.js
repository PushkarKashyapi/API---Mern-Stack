/*
const fs = require('fs');
const { toUnicode } = require('punycode');

/*const textIn = fs.readFileSync('./txt/real.txt' , 'utf-8');

console.log(textIn);

const textOut  = `this is what i learned today abput node js : ${textIn} \ Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt' , textOut); */

// reaDing the file in asynchronous way // 
TODO  /*

fs.readFile(`./txt/test.txt`, 'utf-8' , (err , data1)=>{
    console.log(data1);
    fs.readFile(`./txt/${data1}.txt` , 'utf-8' ,(err , data2) =>{
        console.log(data2);
fs.writeFile(`./txt/result.txt` , `${data1}\n${data2}` , 'utf-8' , err =>{
    console.log("your file succesfully written and created ")
       })
    });
  });
  
  */