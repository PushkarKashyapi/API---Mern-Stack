const fs = require('fs')

const tour =JSON.parse(fs.readFileSync(`${__dirname}/data1/tours1.json` , 'utf-8'));


exports. allusers = (req , res) =>{
    res.status(500).json({
        status : "success" , 
        data : {
            users : "nothing here "
        }
    })
}