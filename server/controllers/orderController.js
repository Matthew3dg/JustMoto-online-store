const { OrderProduct } = require('../models/models.js');

class orderController {
	async create(req, res, next) {
		// получаем данные для создания заказа из тела запроса с клиента
		const { productId, orderId, counter } = req.body;

		let order = {};

		//проверяем есть ли такая запись в базе данных
		const isExist = await OrderProduct.findOne({
			where: {
				productId: productId,
				orderId: orderId,
			},
		});
		console.log('===================================================');
		console.log(isExist);
		// если есть
		if (isExist) {
			let currentCounter = Number(isExist.counter) + Number(counter);
			// обновляем данные(увиличиваем количество товара)
			order = await OrderProduct.update(
				{
					counter: currentCounter,
				},
				{
					where: {
						productId: productId,
						orderId: orderId,
					},
				}
			);

			// если нету
		} else {
			// создаём в таблице order_products запись
			order = await OrderProduct.create({
				productId: productId,
				orderId: orderId,
				counter: counter,
			});
		}
		// возвращаем объект на клиент
		return res.json(order);

		//получаем данные о созданном заказе
		// const returnCreatedOrder = await OrderProduct.findAll({
		// 	where: { orderId: orderId },
		// });
	}
}
module.exports = new orderController();
