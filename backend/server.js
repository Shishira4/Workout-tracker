require('dotenv').config()
const express = require('express')

const app = express()//creats an express app

//middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})
//route handler to react to requests
app.get('/',(req, res)=>(
    res.json({mssg: 'Welcome to the app'})
))

//listen for requests
app.listen(process.env.PORT,()=>(
    console.log('Listening to port 4000!!hihih')
))
process.env 