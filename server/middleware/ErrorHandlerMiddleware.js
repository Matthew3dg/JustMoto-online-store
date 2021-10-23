const ApiError = require('../error/ApiError.js');

module.exports = function (err, req, res, next) {
	// если класс ошибки тот который мы создали (ApiError)
	if (err instanceof ApiError) {
		//отправляем на клиент статус ошибки и сообщение
		return res.status(err.status).json({ message: err.message });
	}
	return res.status(500).json({ message: 'Непредвиденная ошибка!' });
};
