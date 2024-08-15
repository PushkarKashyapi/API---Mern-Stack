//const getrouter = require('./tourRoutes')
//const userRoute = require('./userRoutes')
//const getmongorouter = require('./tourRoutes')
//const aliasrouter = require('./tourRoutes')
const mongoose = require('mongoose')
//const routes = require('./tourRoutes')

const {
  getrouter ,routes
} = require('./tourRoutes')

// modules // 
const dotenv = require('dotenv')

dotenv.config({path : './config.env'})

const fs = require('fs'); 
const express = require('express')
const app = express();
module.exports = app;

app.use(express.static(`${__dirname}/public/overview.html`))
if(process.env.NODE_ENV === 'development'){
app.use('/api/v1/tour' , getrouter)
//app.use('/api/v1/tour' , aliasrouter)
app.use('/api/v1/tour' , routes)
//app.use('/api/v1/user' , userRoute)
//app.use('/api/v1/mongo' , getmongorouter)



}

//const morgan = require('morgan')
// declarations // 




// Middlewares // 
/*
app.use(express.json());
app.use(morgan('dev'))
app.use((req , res , next) =>{
req.Time = new Date().toISOString()
next()
})
*

// Reading the file // 


 /*app.get('/api/v1/tour' , (req , res) =>{
    res.status(200).json({status : 'success' , 
        data :{
            tour
        }
})
})
*/

// Mounting multiple routes // 



/*


/*
// Different method // 

app.route('/api/v1/user')
.get(allusers)

*/

// Creating new data from client side ( post ) //
app.post('/api/v1/tour' , (req , res) =>{
    const newid = tour[tour.length -1].id +1
    const newtour = Object.assign({id : newid} , req.body)
    tour.push(newtour);
    fs.writeFile(`${__dirname}/data1/tours1.json` , JSON.stringify(tour) , err =>{
        res.status(201).json({status : "success" , 
            data : {
                tours : newtour
            }
        })
    })
})


const schematour = new mongoose.Schema({
    
    name : {
        type : String,
        required :[true , "it is neeeded"] ,
        unique : true
        
    } ,
   // rating : {
       // type : Number,
      //  default : 4.5//

   // },
    price :{
        type :Number,
        
    },
    duration : {
        type : Number
    } ,
    maxGroupSize :{
        type : Number
    },
    
    
    imageCover: {
        type : String
        
    }, 
    
    description :{
        type : String ,
        trim : true 
    },
    difficulty:{
        type : String
    }

})

/*

// Getting the specific data ( id number ) //
app.get('/api/v1/tour/:id' , (req , res) =>{
    const id = req.params.id*1;
    const tours = tour.find(el => el.id === id)
if(id > tour.length){
    JSON({
        status : '404',
        message : "failed"
    })
}
    res.status(200).json({status : "success" , 
        data :{
            tours
        }
    })
})

// updating the data ( patch )
app.patch('/api/v1/tour/:id' , (req , res) =>{
if(req.params.id * 1 > tour.length){
 return res.status(404).json({message : "fool fucker "
 })
 }
  res.status(200).json({status : "success" , 
        data : {
            tours : "<update here > "
        }
    })
})

// deleting the req , res // 
app.delete('/api/v1/tour/:id' , (req , res) =>{
    res.status(204).json({
        status : "success" , 
        data : null
    })
})

// connection and listning // 
*/
