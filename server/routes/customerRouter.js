const Router = require('express');
const customerController = require('../controllers/customerController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = new Router();

router.post('/registration', customerController.registration);
router.post('/login', customerController.login);
router.get('/auth', authMiddleware, customerController.check);

module.exports = router;
