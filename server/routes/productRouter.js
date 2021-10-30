const Router = require('express');
const productController = require('../controllers/productController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');
const router = new Router();

router.post('/', checkRole('ADMIN'), productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getOne);

module.exports = router;
