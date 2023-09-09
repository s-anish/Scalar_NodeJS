const express = require('express')
const categories = require('./Routes/categories')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/learningPlatform')
.then(()=> console.log('connection successfull to Database'))
.catch((error)=> console.error("couldnt connect", error) )

const app = express()
app.use(express.json())
app.use(categories)


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port ' + port))

