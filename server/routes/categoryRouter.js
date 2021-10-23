const Router = require('express');
const categoryController = require('../controllers/categoryController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');
const router = new Router();

router.post('/', checkRole('ADMIN'), categoryController.create);
router.get('/', categoryController.getAll);

module.exports = router;
