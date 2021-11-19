const { OrderProduct, Order } = require('../models/models.js');

class orderController {
	async getAll(req, res) {
		// здесь "findAll" встроенная функция sequelize
		// осуществляет выборку всех записей(строк) таблицы
		const orders = await Order.findAll();
		return res.json(orders);
	}
	async createOrder(req, res, next) {
		// получаем данные для создания заказа из тела запроса с клиента
		const { customerId, amount } = req.body;

		// создаём заказ пользователя
		const order = await Order.create({
			customerId: customerId,
			amount: amount,
		});

		// возвращаем объект на клиент
		return res.json(order);
	}
	async updateOrder(req, res, next) {
		// получаем данные для обновления из тела запроса с клиента
		const { status, id } = req.body;

		// обновляем статус заказа с заданным ID
		const updatedOrder = await Order.update(
			{
				status: status,
			},
			{
				where: {
					id: id,
				},
			}
		);
		// возвращаем объект на клиент
		return res.json(updatedOrder);
	}

	async createOrderProduct(req, res, next) {
		// получаем данные для создания заказа из тела запроса с клиента
		const { productId, orderId, counter } = req.body;

		// создаём в таблице order_products запись
		const orderProduct = await OrderProduct.create({
			productId: productId,
			orderId: orderId,
			counter: counter,
		});

		// возвращаем объект на клиент
		return res.json(orderProduct);
	}
}
module.exports = new orderController();
