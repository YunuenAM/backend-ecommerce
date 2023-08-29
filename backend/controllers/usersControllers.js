const registerUser = (req,res) => {
   res.json({message: 'To create user'})
}

const loginUser = (req,res) => {
    res.json({message: 'User Login'})
 }


 const getUserData = (req,res) => {
    res.json({message: 'My user data'})
 }
module.exports = {
    registerUser,
    loginUser,
    getUserData
}