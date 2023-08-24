const express =  require('express')
const router = express.Router()

//To get products
router.get('/', (req,res)=>{
    res.status(200).json({message: 'To get products'})
})


//To create products
router.post('/', (req,res)=>{
    res.status(200).json({message: 'To create products'})
})


//To edit products
router.put('/:id', (req,res)=>{
    res.status(200).json({message: `To edit product ${req.params.id}`})
})

//To delete products
router.delete('/:id', (req,res)=>{
    res.status(200).json({message: `To delete product ${req.params.id}`})
})


module.exports = router