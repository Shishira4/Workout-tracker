require('dotenv').config()
const express = require('express')

const workoutRoutes = require('./routes/workouts')

const app = express()//creats an express app

//middleware
app.use(express.json()) ///helps store and access the data  req object
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//route handler to react to requests
app.use('/api/workouts',workoutRoutes)

//listen for requests
app.listen(process.env.PORT,()=>(
    console.log('Listening to port 4000!!hihih')
))
process.env 