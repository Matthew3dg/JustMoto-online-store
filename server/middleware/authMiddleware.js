const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	if (req.method === 'OPTIONS') {
		next();
	}
	try {
		// забираем из хедеров токен
		// Bearer dfgdfgfdgnhghghghgh(беем вторую часть после пробела, тк первая - это тип токена)
		const token = req.headers.authorization.split(' ')[1];
		if (!token) {
			res.status(401).json({ message: 'Пользователь не авторизован' });
		}
		const decoded = jwt.verify(token, 'super_secret_key2021');
		req.customer = decoded;
		next();
	} catch (error) {
		res.status(401).json({ message: 'Пользователь не авторизован' });
	}
};
