const Router = require('express');
const router = new Router();
const categoryRouter = require('./categoryRouter.js');
const customerRouter = require('./customerRouter.js');
const productRouter = require('./productRouter.js');

router.use('/customer', customerRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);

module.exports = router;
