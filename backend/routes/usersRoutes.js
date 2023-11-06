const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getUserData, email} = require('../controllers/usersControllers')
const {protect}  =  require('../middleware/authMiddleware')


router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/getMe', protect, getUserData)



module.exports = router