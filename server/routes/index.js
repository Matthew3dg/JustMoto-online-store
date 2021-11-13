const Router = require('express');
const router = new Router();
const categoryRouter = require('./categoryRouter.js');
const customerRouter = require('./customerRouter.js');
const productRouter = require('./productRouter.js');
const orderRouter = require('./orderRouter.js');

router.use('/customer', customerRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/order', orderRouter);

module.exports = router;
