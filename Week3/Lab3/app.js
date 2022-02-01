const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())



mongoose.connect('mongodb://localhost:27017/foodEntries',{
    useNewURLParser:true
}).then(()=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err)
})