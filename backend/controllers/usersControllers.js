const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler =  require('express-async-handler')
const User = require('../models/usersModel')

const registerUser = asyncHandler(async(req,res) => {
   const {name, email, password} = req.body
   if (!name || !email || !password){
      res.status(400)
      throw new Error('please enter all the data')
   }

   //Check if the user exists
   const userExists = await User.findOne({email})
   if(userExists){
      res.status(400)
      throw new Error('this user is already registered')
   }

   //hash password

   const salt = await bcrypt.genSalt(10)
   const hashedPassword =  await bcrypt.hash(password, salt)

   //to create user in db

   const user = await User.create({
      name,
      email,
      password: hashedPassword
   })

   if(user){
      res.status(201).json({
         _id:user._id,
         name: user.name,
         email: user.email
      })
   }else{
      res.status(400)
      throw new Error('impossible to create user, verify your data')
   }
})

const loginUser = asyncHandler(async(req,res) => {
    res.json({message: 'User Login'})
 })


 const getUserData = asyncHandler(async(req,res) => {
    res.json({message: 'My user data'})
 })
module.exports = {
    registerUser,
    loginUser,
    getUserData
}