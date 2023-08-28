const asyncHandler = require('express-async-handler')
const Product = require ('../models/productsModel')


const getProducts = asyncHandler(async (req,res) =>{
    const products = await Product.find()

    res.status(200).json(products)
})

const setProduct = asyncHandler(async (req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Enter a product')
      
    }

    const product = await  Product.create({
        text: req.body.text
    })
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