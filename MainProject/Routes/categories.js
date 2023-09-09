const express = require('express')
const Joi = require('joi')
const mongoose = require('mongoose')
const router = express.Router()

const categorySchema = new mongoose.Schema({
    name: {type:String, required :true, minlength: 3}
})

const Category = new mongoose.model('Category', categorySchema)


router.get('/api/categories',async (req,res) =>{
    let categories = await Category.find()
    res.send(categories)
});

router.post('/api/categories', async(req,res) =>{

    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const category = new Category({
        name: req.body.name
    })
    await category.save();
    res.send(category)
})

router.put('/api/categories/:id',async (req, res) =>{

    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const category = await Category.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new: true})

    // const category = categories.find(c => c.id === parseInt(req.params.id))
    if(!category) return res.status(404).send('The category with given ID doesnt exist')

    //category.name = req.body.name;

    res.send(category);
})

router.delete('/api/categories/:id',async (req, res) =>{
    // const category = categories.find(c => c.id === parseInt(req.params.id))

    const category = await Category.findByIdAndRemove(req.params.id)
    if(!category) return res.status(404).send('The category with given ID doesnt exist')

    // const index = categories.indexOf(category)
    // categories.splice(index,1)

    res.send(categories)
})

router.get('/api/categories/:id', async(req, res) =>{
    
    //const category = categories.find(c => c.id === parseInt(req.params.id))
    
    const category = await Category.findById(req.params.id)
    if(!category) return res.status(404).send('The category with given ID doesnt exist')

    res.send(category)
})

function validateData(category){
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(category, schema)
}

module.exports = router