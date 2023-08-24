const express =  require('express')
const router = express.Router()

//To get products
router.get('/', (req,res)=>{
    res.status(200).json({message: 'To get products'})
})

module.exports = router