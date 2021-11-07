import axios from 'axios';

// для запросов не требующих авторизации
const $host = axios.create({
	baseURL: 'http://localhost:5000/',
});

// с авторизацией(header authorization)
// необходимо подставлять токен к каждому запросу
const $authHost = axios.create({
	baseURL: 'http://localhost:5000/',
});

const authInterceptor = (config) => {
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
};

// добавляем интерцептор для запроса
// будет отрабатывать перед каждым запросом и подставлять токен
// в header authorization
$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
