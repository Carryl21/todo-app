const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// configure routes

// get  
router.get('/api', async (request, response) => {
    
    // DATABASE STUFF
    Todo.find()
        .then(todo => {
            response.send(todo)
        })
        .catch(error => {
            response.status(500).send({message: error.message})
        })
})

// post 
router.post('/apipost', (request, response) => {
    if(!request.body){
        return response.status(400).send({message: 'No empty field'})
    }

    // DATABASE STUFF
    const todo = new Todo({
        text: request.body.text
    })

    todo.save()
        .then(data => {
            response.send(data)
        })
        .catch(error => {
            response.status(500).send({message: error.message})
        })
})

router.delete('/api/:id', (request, response) => {
    const id = request.params.id 

    Todo.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                return response.status(404).send({message: 'Wrong ID'})
            }else{
                return response.send({message: 'Deleted Successfully!'})
            }
        })
        .catch(error => {
            response.status(500).send({message: error.message})
        })
})


// router.get('/api', async (request, response) => {
//     response.json({'users': ['userOne', 'userTwo']})
// })

// // post 
// router.post('/apipost', async (request, response) => {
//     console.log(request.body)
//     response.end()
// })



module.exports = router 
