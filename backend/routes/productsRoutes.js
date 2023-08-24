const express =  require('express')
const router = express.Router()
const {getProducts, setProduct, updateProduct,deleteProduct} = require('../controllers/productsControllers')


//To get products
router.get('/', getProducts)


//To create products
router.post('/', setProduct)


//To edit products
router.put('/:id',updateProduct)

//To delete products
router.delete('/:id', deleteProduct)


module.exports = router