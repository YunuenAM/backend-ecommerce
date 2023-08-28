const asyncHandler = require('express-async-handler')
const Order = require('../models/ordersModel')

const getOrders = asyncHandler(async (req, res) =>  {

    const orders = await Order.find()
    res.status(200).json(orders)
})

const setOrder = asyncHandler(async (req, res) =>  {
    if(!req.body.text){
        res.status(400)
        throw new Error('Enter a order please')
        
    }
    const order = await Order.create({
        text: req.body.text
    })

    res.status(201).json(order)
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