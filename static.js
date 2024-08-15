const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/public/overview.html`))

app.get('/public/overview.html' , (req , res) =>{
    res.send("file is working ")
})

app.listen(5000 , () =>{
    console.log("server is running")
})