const asyncHandler = require('express-async-handler')
const Order = require('../models/ordersModel')

const getOrders = asyncHandler(async (req, res) =>  {

    const orders = await Order.find({user: req.user.id})
    res.status(200).json(orders)
})

const setOrder = asyncHandler(async (req, res) =>  {
    if(!req.body.text){
        res.status(400)
        throw new Error('Enter a order please')
        
    }
    const order = await Order.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(201).json(order)
})

const updateOrder =  asyncHandler(async(req, res) =>  {

    const order = await Order.findById(req.params.id)
    if(!order){
        res.status(404)
        throw new Error('The order was not found')
    }

    //Check that the order belongs to the user's login

    if(order.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('unauthorized user')
    }else{
        const updatedOrder =  await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.status(200).json(updatedOrder)
    }

    
})

const deleteOrder = asyncHandler(async(req, res) =>  {


    const order = await Order.findById(req.params.id)
    if(!order){
        res.status(404)
        throw new Error('The order was not found')
    }

    if(order.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('unauthorized user')
    }else{
        order.deleteOne()

    res.status(200).json({id: order._id})
       
    }
    
    //const deletedOrder = await Order.findByIdAndDelete(req.params.id)

    // order.deleteOne()

    // res.status(200).json({id: order._id})
})

module.exports = {
    getOrders,
    setOrder,
    updateOrder,
    deleteOrder
}