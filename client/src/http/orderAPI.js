import { $authHost } from './index.js';

// создание заказа из корзины
export const createOrder = async (customerId, amount) => {
	const { data } = await $authHost.post('api/order/createorder', {
		customerId: customerId,
		amount: amount,
	});
	return data;
};
export const createOrderProduct = async (productId, orderId, counter) => {
	const { data } = await $authHost.post('api/order/createorderproduct', {
		productId: productId,
		orderId: orderId,
		counter: counter,
	});
	return data;
};
//получение всех заказов
export const fetchOrders = async () => {
	const { data } = await $authHost.get('api/order');
	return data;
};

//обновление статуса заказа
export const updateStatus = async (id, status) => {
	const { data } = await $authHost.post('api/order/update', {
		status: status,
		id,
	});
	//localStorage.setItem('token', data.token);
	return data;
};
