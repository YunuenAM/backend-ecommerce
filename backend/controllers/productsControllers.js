const asyncHandler = require('express-async-handler')


const getProducts = asyncHandler(async (req,res) =>{
    res.status(200).json({message: 'To get products'})
})

const setProduct = asyncHandler(async (req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Enter a product')
      
    }
    res.status(201).json({message: 'To create products'})
})

const updateProduct = asyncHandler(async (req,res) =>{
    res.status(200).json({message: `To edit product ${req.params.id}`})
})

const deleteProduct = asyncHandler(async (req,res) =>{
    res.status(200).json({message: `To delete product ${req.params.id}`})
})



module.exports={
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct

}