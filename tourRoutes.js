const express = require('express')
const tourcontroller = require('./tourcontroller')



//const aliasrouter = express.Router()
const routes = express.Router()
const getrouter = express.Router()

//const getmongorouter = express.Router()



//aliasrouter.route('/cheapest').get(tourcontroller.middle ,tourcontroller.getalltour )
routes.route('/pipeline').get(tourcontroller.getpipe)
getrouter.route('/')
.get( /*tourcontroller.checkbody */ tourcontroller.getalltour)

//getmongorouter.route('/')
//.post( /*tourcontroller.checkbody */ tourcontroller.getmongotour)






// need to make routes for taking id soon for practice // 



module.exports ={
   getrouter ,  routes 
} 

//module.exports = aliasrouter
//module.exports = getmongorouter //
