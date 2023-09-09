const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('connection successfull'))
.catch((error)=> console.error("couldnt connect", error) )
// using promise to catch errors

const courseSchema = new mongoose.Schema({
    name : {type:String, required:true},
    tags : {type:Array ,validate:{
            validator: function(tags){
                return tags.length > 1
        }}},
    creator: {type:String, required:true},
    publishedDate: {type:Date, default:Date.now},
    isPublished: {type:Boolean, required:true}, 
    rating: {type: Number, required: function(){return this.isPublished}} 
});

const Course = mongoose.model('Course', courseSchema)


async function createCourse(){
    const course = new Course({
        name: 'mongoDB',
        creator: 'who',
        isPublished: true,
        
        tags: ['NoSQl'],
        rating: 5
    })
    
    const result = await course.save()
    console.log(result)
}

createCourse()

async function getCourse(){
    const courses = await Course.find({creator:'anish'}).select({name:1}) 
    // select methods allows us to get only the name
    //.and([{creator:'anish'}, {isPublished:true}]) 
    //u can use and/or operators to get documents that satisfy and/or condition  
    console.log(courses)
}

// filter operators - gt(greater than), eq(equal), gte(greater than or equal), lt(lesser than), lte
//in or not in - in a certain range or not 

//getCourse()


async function updateCourse(id){
    
    const course = await Course.findById(id)

    if(!course) return;

    course.name = 'python'
    course.creator = 'whoknows'

    const updatedCourse = await course.save()
    console.log(updatedCourse)
}

//updateCourse('64f96636e10eafecf8efbadd')


async function deleteDocument(id){
    let course = await Course.findByIdAndDelete(id) 
    // you can use .findByIdAndRemove(id) too
    console.log(course)
}

//deleteDocument('64f96636e10eafecf8efbadd')