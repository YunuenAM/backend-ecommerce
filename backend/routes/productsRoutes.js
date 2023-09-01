const express =  require('express')
const router = express.Router()
const {getProducts, setProduct, updateProduct,deleteProduct} = require('../controllers/productsControllers')
const {protect} = require('../middleware/authMiddleware')   


//To get products
router.get('/', getProducts)


//To create products
router.post('/', protect,setProduct)


//To edit products
router.put('/:id',protect, updateProduct)

//To delete products
router.delete('/:id', protect, deleteProduct)


module.exports = router