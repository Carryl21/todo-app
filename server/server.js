const express = require('express')
const dotenv = require('dotenv')

const app = express() 
app.use(express.json({limit: '1mb'}))

// load database 
const connectDB = require('./database/connection')

// config and port 
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080 

// connect database 
connectDB()

// load router 
const router = require('./routes/api')
app.use('/', router)


app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})