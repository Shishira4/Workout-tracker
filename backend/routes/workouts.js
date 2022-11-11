const express = require('express')

const router = express.Router()
// to get all workouts
router.get('/',(req, res)=>{
    res.json({mssg: 'GET all workouts'})
})

//single workout
router.get('/:id', (req, res)=>{
    res.json({mssg: 'GET A SINGLE WORKOUT'})
})

//Post a new workout - 
router.post('/',(req, res)=>{
    res.json({mssg: 'POsr a new workout'})
})

//Delete a new workout
router.delete('/:id',(req, res)=>{
    res.json({mssg: 'Delete a new workout'})
})

//Update a workout - adding data to the server can be accessed by req object
router.patch('/:id',(req, res)=>{
    res.json({mssg: 'Update a new workout'})
})
module.exports=router