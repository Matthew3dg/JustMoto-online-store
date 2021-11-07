import { $authHost, $host } from './index.js';
import jwt_decode from 'jwt-decode';

//РЕГИСТРАЦИЯ АВТОРИЗАЦИЯ И ПРОВЕРКА ТОКЕНА

export const registration = async (email, password) => {
	const { data } = await $host.post('api/customer/registration', {
		email,
		password,
		role: 'ADMIN',
	});
	localStorage.setItem('token', data.token);
	// data - обьект содержащий поле token
	return jwt_decode(data.token);
};

export const login = async (email, password) => {
	const { data } = await $host.post('api/customer/login', {
		email,
		password,
	});
	localStorage.setItem('token', data.token);
	return jwt_decode(data.token);
};

// функция "check" вызывается при обновлении страницы
// и проверяет токе на валидность
// если токен не валиден, то пользователь разлогинивается
export const check = async () => {
	const { data } = await $authHost.get('api/customer/auth');
	localStorage.setItem('token', data.token);
	return jwt_decode(data.token);
};
