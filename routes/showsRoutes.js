const express = require('express');
const router = express.Router();
const {Show} = require ('..\models\index.js');

//routes

router.get('/', async (request, response) => {
    try{
        const shows = await Show.findAll();
        response.status(200).json(shows);
    } catch(error){
        console.error(error);
        response.status(404).send('There are no shows in the database!');
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id 
        const foundShow = await Show.findByPk(id)
        res.status(200).json(foundShow)
    } catch (error) {
        console.error(error)
        res.status(404).send('Sorry no show was found with that ID')
    }
})