const express = require('express');
const router = express.Router();
const {User} = require('..\models\index.js')

//endpoint routes 

router.get('/', async (request, response) => {
    try{
        const users = await User.findAll();
        response.status(200).json(users);
    } catch(error){
        console.error(error);
        response.status(404).send('There are no users in the database!');
    }
})

router.get('/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const foundUser = await User.findByPk(id);
        response.status(200).json(foundUser);
    } catch (error) {
        console.error(error);
        response.status(404).send('No user found with that ID.');
    }
})