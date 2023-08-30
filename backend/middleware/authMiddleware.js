const  jwt  = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const protect = asyncHandler(async(req, res, next) =>{
    let  token 

    if(req.headers.authorization &&  req.headers.authorization.startsWith('Bearer')){
        try {
            //To obtain token
            token =  req.headers.authorization.split(' ')[1]
            //To verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //To obtain token id user
            req.user = await User.findById(decoded.id).select('-password')

            // // Verificar si el usuario tiene el rol de administrador
            // if (req.user.role !== 'admin') {
            //     res.status(403);
            //     throw new Error('Unauthorized. Admin role required.');
            // }
            ////
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('without authorization')
        }
    }
    if(!token){
        res.status(401)
            throw new Error('without authorization, token not provided')
    }
})

module.exports = {protect}