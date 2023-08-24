const getOrders = (req, res) =>  {
    res.status(200).json({message: 'To get orders'})
}

const setOrder = (req, res) =>  {
    res.status(201).json({message: 'To create orders'})
}

const updateOrder = (req, res) =>  {
    res.status(200).json({message: `To edit order ${req.params.id}`})
}

const deleteOrder = (req, res) =>  {
    res.status(200).json({message: `To delete order ${req.params.id}`})
}

module.exports = {
    getOrders,
    setOrder,
    updateOrder,
    deleteOrder
}