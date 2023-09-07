const express = require('express')

const app = express()

app.use(express.json())

//app.use()

app.get('/', (req, res) => {
    res.send('hello from scalar topics')
}) 

app.get('/about', (req, res) => {
    res.send('this is about me')
})

const courses = [
    {id:1, name:'java'},
    {id:2, name:'Python'},
    {id:3, name:'NodeJS'}
]

app.get('/courses/:id', (req, res) => {
    const course = courses.find( course => course.id === parseInt(req.params.id))
    

    if(!course) res.status(404).send('This course does not exist')
    res.send(course)
})

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.post('/courses', (req, res)=>{
    const course = {
        id: courses.length +1,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses)
})

const port = process.env.PORT || 3000 //dynamic port generation cause ports are not static during production

app.listen(3000, () => console.log('running on port ' + port))