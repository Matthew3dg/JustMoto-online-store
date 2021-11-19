import { $authHost, $host } from './index.js';

//получение и создание категорий
export const createCategory = async (name) => {
	const { data } = await $authHost.post('api/category', name);
	return data;
};
export const fetchCategories = async () => {
	const { data } = await $host.get('api/category');
	return data;
};

//получение и создание товаров
export const createProduct = async (name) => {
	const { data } = await $authHost.post('api/product', name);
	return data;
};
export const fetchProducts = async (categoryId) => {
	const { data } = await $host.get('api/product', { params: { categoryId } });
	return data;
};
export const fetchOneProduct = async (id) => {
	const { data } = await $host.get(`api/product/${id}`);
	return data;
};
