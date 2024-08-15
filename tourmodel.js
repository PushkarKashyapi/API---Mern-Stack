const mongoose = require('mongoose')
const slugify = require('slugify')
const validator = require('validator')
const schematour = new mongoose.Schema({
    name : {
        type : String,
        required :[true , "it is neeeded"] ,
        unique : true,
        //maxlength : [40 , 'name exceding limit'],
        // VALIDATOR IN BUILT // 
        //validate : validator.isAlpha

        
        
    } ,
    slug : String,
   
    price :{
        type :Number
        
    },
    duration : {
        type : Number,
        // ONLY WORKS WHEN NEW DOCUMENT IS CREATED //
       /* validate :  {
            validator : function(val){
                return val < this.price
            },
            message : 'cannot give this much discount '
        } */
    } ,
    maxGroupSize :{
        type : Number,
        max : [100, 'this is limit']
    },
    
    
    imageCover: {
        type : String
        
    }, 
    
    description :{
        type : String ,
        trim : true 
    },
    difficulty:{
        type : String,
        enum : {
            values : ['easy' , 'hard' , 'easiest'],
            message : ['cannot add different from this']
        }

    }, 
} , 
{
    toJSON :{
        virtuals:true
    },
    toObject :{
        virtuals: true
    }

})

schematour.virtual('durationweek').get(function(){
    return this.duration/7
})

// Document Middleware // 
schematour.pre('save' , function(next){
this.slug = slugify(this.name ,{ lower : true })
next()
})

schematour.post('save' , function(doc , next){
    console.log(doc)
    next()
})


// query Middleware //
schematour.pre(/^find/ , function(next){
    this.find({
        secretour : {
            $ne : true

        }
        
    })
    this.start = Date.now()
    next()
})


schematour.post(/^find/ , function(doc , next){
    console.log (`time taken is ${Date.now() - this.start }
    `)
    console.log(doc)
    next()
})

// AGGREGATE MIDDLEWARE // 


 schematour.pre('aggregate' , function(next){
    this.pipeline().unshift({
        $match : {
            secretour : {
                $ne : true
            }
        }
    })
    console.log(this.pipeline)
    next()
})





const tourmodel = mongoose.model('tour' , schematour)
module.exports = tourmodel