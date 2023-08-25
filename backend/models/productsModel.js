const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    text:{
        type: String,
        required:[true,"Please enter the name of the product "]
    }

}, {
    timestamp: true
})

module.exports = mongoose.model('Product', productSchema)