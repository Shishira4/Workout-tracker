require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
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
//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>(
        console.log('connnected to db and Listening to port 4000!!hihih')
    ))
})
.catch((error)=>{
    console.log(error)
})
//listen for requests

process.env 