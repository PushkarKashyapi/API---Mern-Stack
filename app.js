const express = require('express'); 

const app = express(); 

app.get('/' , (req, res) =>{
    res.status(200).json({message:"listning on server 300" , jhat :"vit"})
})

app.post('/' , (req , res) =>{
    res.send("this is a post request")
})

const port = 3000
app.listen(port , () =>{
    console.log("server is running succesfully ")
})

