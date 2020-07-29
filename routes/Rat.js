const express = require('express');
const RatRouter = express.Router();
const {index, create, update, destroy} = require('../controllers/Rat.js');

//ROUTES

//get all rats
RatRouter.get('/', index);

//create new rats
RatRouter.post('/', create);

//update a rat
RatRouter.put('/:id', update);

//delete a rat
RatRouter.delete('/:id', destroy);

module.exports = RatRouter;