import { $authHost } from './index.js';

// создание заказа из корзины
export const createOrder = async (productId, orderId, counter) => {
	const { data } = await $authHost.post('api/order/create', {
		productId: productId,
		orderId: orderId,
		counter: counter,
	});
	return data;
};
