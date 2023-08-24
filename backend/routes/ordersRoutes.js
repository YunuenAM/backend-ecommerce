const express =  require('express')
const router = express.Router()

//To get orders
router.get('/', (req,res)=>{
    res.status(200).json({message: 'To get orders'})
})

module.exports = router