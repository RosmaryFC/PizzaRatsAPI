const Pizza = require('../models/Pizza.js')

//INDEX - GETS ALL PIZZA
const index = async (req, res) => {
    try{
        const allPizza = await Pizza.find({});
        res.status(200).json(allPizza);
    }catch(error){
        res.status(400).send(error)
    }
};

//CREATE - MAKES A NEW PIZZA
const create = async (req,res) => {
    try{
        const newPizza = await Pizza.create(req.body);
        res.status(200).json(newPizza);
    }catch(error){
        res.status(400).send(error);
    }
}

//UPDATE - UPDATES PIZZA
const update = async (req,res) => {
    try{
        const updatePizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatePizza);
    }catch(error){
        res.status(400).send(error);
    }
}

//DESTROY - DELETES PIZZA
const destroy = async (req,res) => {
    try{
        const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedPizza);
    }catch(error) {
        res.status(400).send(error);
    }
}


module.exports = {
    index,
    create,
    update,
    destroy
};

