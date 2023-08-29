const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your name please']
    },

    email: {
        type: String,
        required: [true, 'Enter your email please'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'Enter your password please']
    },

    admin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})
module.exports = mongoose.model('User', userSchema)