class apifeatures{
    constructor(query , querystring){
this.query = query;
this.querystring = querystring
}
    filter(){
            let queryobj = {...this.querystring}
    const exclude = ['sort' , 'page' , 'fields']
    exclude.forEach(el => delete queryobj[el])

    let querystr = JSON.stringify(queryobj);
    querystr = querystr.replace(/\b(gte|gt|lte|lt)\b/g , match => `$${match}`)
     this.query.find(JSON.parse(querystr))
return this

        }

        sort(){
            if(this.querystring.sort){
                const sortby = this.querystring.sort.split(',').join(' ') // TO ADD MULTIPLE OPTIONS //
            
                this.query = this.query.sort(sortby)
            }
                return this
        }

       limitfields(){
        if(this.querystring.fields){

            const fields = this.querystring.fields.split(',').join(' ')
           
            this.query = this.query.select(fields)
           
            
            
        }
        return this
       }
       pagination(){

        const page = this.querystring.page * 1 
const limit = this.querystring.limit * 1 
const skip = (page - 1) * limit

console.log(page)
console.log(limit)
console.log(skip)

this.query = this.query.skip(skip).limit(limit)

return this
       }

       }
    
       module.exports = apifeatures