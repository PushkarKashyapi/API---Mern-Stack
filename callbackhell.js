const fs = require('fs') ; 
const superagent = require('superagent');

fs.readFile('./txt/callbackhell.txt' , (err , data) =>{
    console.log(`breed : ${data}`)

superagent.get(`https://dog.ceo/api/breed/${data}
/images/random`).end((err , res) =>{
    console.log(res.body.message)

    fs.writeFile('./txt/dog.txt' , res.body.message , err =>{
        console.log("created dog folder");
    })
    
  })

})



