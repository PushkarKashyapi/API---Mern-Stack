const fs = require('fs')
const mongoose = require('mongoose')
const tourmodel = require('./tourmodel');
const apifeatures = require('./apifeatures')
const { query } = require('express');



const tour =JSON.parse(fs.readFileSync(`${__dirname}/data1/tours1.json` , 'utf-8'));

exports.middle = (req , res , next) =>{
    req.query.sort = 'price';
    req.query.limit = '2'
    next()
}


    
exports.getalltour = async (req,res) =>{
try{

    // EXECUTING QUERY // 


    const features = new apifeatures(tourmodel.find() , req.query).filter().sort().limitfields().pagination()
    const tours = await features.query

console.log(tours)


    res.status(201).json({
        status : "success" , 
        data : {
        tours
        }
    })
} catch(err){
    res.status(err)
}
}

        



   

exports.getmongotour = async (req, res) => {
    try {
        const mongo = await tourmodel.create(req.body);
        

        res.status(201).json({
            status: "success",
            data: {
                 mongo
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "fail",
            message: err
        });
    }
};

exports.updatetour = async(req , res) =>{
    try{
const filter = {
    _id : req.params.id
}
const update = {
    
    $set : {price : req.body}

}
// same like filter update run validators 
const tourss = tourmodel.updateOne(filter , update , options)

res.status(200).json({
    status : "success" , 
    data :{
        tourss
    }
})
    } catch(err){
        res.status("it is good")
    }
}

exports.deletour = async(req , res) =>{
    const dlt = await tourmodel.findByIdAndDelete();

    res.status(204).json({
        status : "success",
        data : null
            
        

    })
}


/*
exports.checkbody = (req,res) =>{
    if(!res.body.price){
        return res.status(404).json({
            status : "failed" , 

        })
    }
}
    */



exports.getpipe = async(req , res) =>{
    try{
const stats = await tourmodel.aggregate([
    {

    $match : {
        duration : {
            $gte : 2
        }
    }
    } , 
    {
    $group : {
        _id : null ,
        avgprice : {$avg : '$price'}
    }
},
{
    $sort : {
        avgprice : 1
    }

    
}
])
res.status(201).json({
    status : "success" , 
    data : {
    stats
    
    }
})
    }
    catch(err){
console.log("error")
    }
}

/*
exports.getpipe = async (req, res) => {
    try {
        const stats = await tourmodel.aggregate([
            { $match: { duration: { $gte: 2 } } },
            { $group: { _id: null, avgPrice: { $avg: '$price' } } },
            { $sort: { avgPrice: 1 } }
        ]);

        res.status(200).json({
            status: 'success',
            data: { stats }
        });
    } catch (err) {
        console.error('Error in /pipeline route:', err);
        res.status(500).json({
            status: 'fail',
            message: 'Internal Server Error'
        });
    }
};

*/