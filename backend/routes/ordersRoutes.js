const express =  require('express')
const router = express.Router()
const {getOrders, setOrder, updateOrder, deleteOrder} = require('../controllers/ordersControllers')
const {protect} = require('../middleware/authMiddleware')

//To get orders
router.get('/', protect, getOrders)

//To create orders
router.post('/', protect, setOrder)

//To edit orders
router.put('/:id',protect, updateOrder)

//To delete orders
router.delete('/:id',protect,deleteOrder)

module.exports = router