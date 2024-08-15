const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path : './config.env'})
const newtour = require('./modelcontrooler')

const app = require('./project1')

// mongoconnection // 
const db = process.env.DATABASE;
mongoose.connect(db , {
    useNewUrlParser : true,
    useCreateIndex : true , 
    useFindAndModify : false
}).then(( ) => console.log("connected succesfully "))

// schema and model // 









// 
const port = 12000
app.listen(port , ()=>{
    console.log(`port is working on ${port}`)
})

console.log(process.env.PORT)

const x = 2