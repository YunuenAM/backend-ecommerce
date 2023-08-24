const express =  require('express')
const router = express.Router()

//To get orders
router.get('/', (req,res)=>{
    res.status(200).json({message: 'To get orders'})
})

//To create orders
router.post('/', (req,res)=>{
    res.status(200).json({message: 'To create orders'})
})

//To edit orders
router.put('/:id', (req,res)=>{
    res.status(200).json({message: `To edit order ${req.params.id}`})
})

//To delete orders
router.delete('/:id', (req,res)=>{
    res.status(200).json({message: `To delete order ${req.params.id}`})
})

module.exports = router