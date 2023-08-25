const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({

    text:{
        type: String,
        required: [true, 'Please type the description of the order']
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)