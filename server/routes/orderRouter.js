const Router = require('express');
const orderController = require('../controllers/orderController.js');
const router = new Router();

router.post('/create', orderController.create);

module.exports = router;
