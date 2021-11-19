import { $authHost, $host } from './index.js';
import jwt_decode from 'jwt-decode';

//РЕГИСТРАЦИЯ АВТОРИЗАЦИЯ И ПРОВЕРКА ТОКЕНА

export const registration = async (email, password) => {
	const { data } = await $host.post('api/customer/registration', {
		email,
		password,
		role: 'USER',
	});
	localStorage.setItem('token', data.token);
	// data - обьект содержащий поле token
	return jwt_decode(data.token);
};

export const update = async (name, phone, address, id) => {
	const { data } = await $authHost.post('api/customer/update', {
		name: name,
		phone: phone,
		address: address,
		id,
	});
	//localStorage.setItem('token', data.token);
	return data;
};

export const login = async (email, password) => {
	const { data } = await $host.post('api/customer/login', {
		email,
		password,
	});
	console.log('ответ с данными пользователя при входе: ');
	console.log(data.response);
	console.log('ответ с токеном при входе: ');
	console.log(data.token);
	localStorage.setItem('userData', JSON.stringify(data.response));
	localStorage.setItem('token', data.token);
	return jwt_decode(data.token);
};

// функция "check" вызывается при обновлении страницы
// и проверяет токен на валидность
// если токен не валиден, то пользователь разлогинивается
export const check = async () => {
	const { data } = await $authHost.get('api/customer/auth');

	localStorage.setItem('token', data.token);
	return jwt_decode(data.token);
};
