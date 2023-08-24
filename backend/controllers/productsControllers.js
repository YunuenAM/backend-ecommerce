const getProducts = (req,res) =>{
    res.status(200).json({message: 'To get products'})
}

const setProduct = (req,res) =>{
    res.status(200).json({message: 'To create products'})
}

const updateProduct = (req,res) =>{
    res.status(200).json({message: `To edit product ${req.params.id}`})
}

const deleteProduct = (req,res) =>{
    res.status(200).json({message: `To delete product ${req.params.id}`})
}



module.exports={
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct

}