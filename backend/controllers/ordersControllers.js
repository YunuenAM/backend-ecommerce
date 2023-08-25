const asyncHandler = require('express-async-handler')

const getOrders = asyncHandler(async (req, res) =>  {
    res.status(200).json({message: 'To get orders'})
})

const setOrder = asyncHandler(async (req, res) =>  {
    if(!req.body.text){
        res.status(400)
        throw new Error('Enter a order please')
        
    }
    res.status(201).json({message: 'To create orders'})
})

const updateOrder =  asyncHandler(async(req, res) =>  {
    res.status(200).json({message: `To edit order ${req.params.id}`})
})

const deleteOrder = asyncHandler(async(req, res) =>  {
    res.status(200).json({message: `To delete order ${req.params.id}`})
})

module.exports = {
    getOrders,
    setOrder,
    updateOrder,
    deleteOrder
}