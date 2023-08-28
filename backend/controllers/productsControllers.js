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

    res.status(201).json(product)
})

const updateProduct = asyncHandler(async (req,res) =>{

    const product = await Product.findById(req.params.id)
    if (!product){
     res.status(404)  
     throw new Error ('The product was not found')
    }
    
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedProduct)
})

const deleteProduct = asyncHandler(async (req,res) =>{

    const product = await Product.findById(req.params.id)
    if(!product){
        res.status(404)
        throw new Error('The product was not found')
    }
    
    //const deletedOrder = await Order.findByIdAndDelete(req.params.id)

    product.deleteOne()


    res.status(200).json({id: product._id })
})



module.exports={
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct

}