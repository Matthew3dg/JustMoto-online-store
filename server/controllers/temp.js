//проверяем есть ли такая запись в базе данных
const isExist = await OrderProduct.findOne({
	where: {
		productId: productId,
		orderId: orderId,
	},
});
// если есть
if (isExist) {
	let currentCounter = Number(isExist.counter) + Number(counter);
	// обновляем данные(увиличиваем количество товара)
	orderProduct = await OrderProduct.update(
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
	// если нет
} else {
	// создаём в таблице order_products запись
	orderProduct = await OrderProduct.create({
		productId: productId,
		orderId: orderId,
		counter: counter,
	});
}
