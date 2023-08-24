const express =  require('express')
const router = express.Router()
const {getOrders, setOrder, updateOrder, deleteOrder} = require('../controllers/ordersControllers')

//To get orders
router.get('/', getOrders)

//To create orders
router.post('/', setOrder)

//To edit orders
router.put('/:id', updateOrder)

//To delete orders
router.delete('/:id',deleteOrder)

module.exports = router