const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getSingleWorkout
} = require('../controllers/workoutController')
const router = express.Router()
// to get all workouts
router.get('/', getWorkouts)

//single workout
router.get('/:id', getSingleWorkout)

//Post a new workout - 
router.post('/',createWorkout)

//Delete a new workout
router.delete('/:id',(req, res)=>{
    res.json({mssg: 'Delete a new workout'})
})

//Update a workout - adding data to the server can be accessed by req object
router.patch('/:id',(req, res)=>{
    res.json({mssg: 'Update a new workout'})
})
module.exports=router