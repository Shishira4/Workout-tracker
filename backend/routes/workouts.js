const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()
// to get all workouts
router.get('/', getWorkouts)

//single workout
router.get('/:id', getSingleWorkout)

//Post a new workout - 
router.post('/',createWorkout)

//Delete a new workout
router.delete('/:id',deleteWorkout)

//Update a workout - adding data to the server can be accessed by req object
router.patch('/:id',updateWorkout)
module.exports=router