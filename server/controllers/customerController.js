const ApiError = require('../error/ApiError.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Customer, Order } = require('../models/models.js');

// создаём токен доступа
const generateJwt = (id, email, role) => {
	return jwt.sign(
		// данные которые помещаются в тело токена
		{ id, email, role },
		'super_secret_key2021',
		// объект с параметрами( время жизни токена)
		{ expiresIn: '24h' }
	);
};

class CustomerController {
	async registration(req, res, next) {
		// получаем данные для регистрации из тела запроса с клиента
		const { email, password, role } = req.body;
		if (!email || !password) {
			return next(ApiError.badRequest('Отсутствует email или пароль'));
		}
		const candidate = await Customer.findOne({ where: { email } });
		if (candidate) {
			return next(
				ApiError.badRequest('Пользователь с таким email уже существует')
			);
		}
		// хэшируем пароль
		const hashPassword = await bcrypt.hash(password, 5);

		// создаём нового пользователя
		const customer = await Customer.create({
			email,
			role,
			password: hashPassword,
		});
		// создаём заказ пользователя
		const order = await Order.create({ customerId: customer.id });

		const token = generateJwt(customer.id, customer.email, customer.role);
		// возвращаем токен на клиент
		return res.json({ token });
	}
	async login(req, res, next) {
		const { email, password } = req.body;
		const customer = await Customer.findOne({ where: { email } });
		// проверяем есть ли пользователь с таким email
		if (!customer) {
			return next(
				ApiError.internal('Пользователь с данным email не зарегистрирован')
			);
		}
		// сравниваем 1) пароль введённый пользователем, 2) пароль полученный из базы данных
		let comparePassword = bcrypt.compareSync(password, customer.password);
		if (!comparePassword) {
			return next(ApiError.internal('Введён неверный пароль'));
		}
		const token = generateJwt(customer.id, customer.email, customer.role);
		return res.json(token);
	}
	async check(req, res, next) {
		// если пользователь постоянно пользуется аккаунтом, то токен перезаписывается
		const token = generateJwt(
			req.customer.id,
			req.customer.email,
			req.customer.role
		);

		res.json({ token });
	}
}
module.exports = new CustomerController();
