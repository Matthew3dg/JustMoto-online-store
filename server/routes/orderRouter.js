const Router = require('express');
const orderController = require('../controllers/orderController.js');
const router = new Router();

router.post('/createorder', orderController.createOrder);
router.post('/createorderproduct', orderController.createOrderProduct);
router.get('/', orderController.getAll);
router.post('/update', orderController.updateOrder);
module.exports = router;
