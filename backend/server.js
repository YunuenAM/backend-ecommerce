const express = require('express')
const dotenv = require('dotenv').config()
const port  = process.env .PORT || 5000

const app = express()
//To get products
app.get('/api/products', (req,res)=>{
    res.send('To get products')
})


//To get orders
app.get('/api/orders', (req,res)=>{
    res.send('To get orders')
})


app.listen(port, ()=> console.log(`Server started on port ${port}`))