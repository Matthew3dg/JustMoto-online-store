import { makeAutoObservable } from 'mobx';

export default class ProductStore {
	constructor() {
		this._categories = [
			// { id: 1, name: 'Мотошлемы' },
			// { id: 2, name: 'Мотоодежда' },
			// { id: 3, name: 'Мотоботинки' },
			// { id: 4, name: 'Аксессуары' },
		];
		this._products = [
			// {
			// 	id: 1,
			// 	title: 'HJC helmet',
			// 	img: './img/catalog/card3.jpg',
			// 	description: 'шлем с полной защитой головы',
			// 	price: 11600,
			// },
		];

		this._selectedСategory = {};

		//для того чтобы mobx следил за сосотянием переменных и при изменении перерисовывал компоненты
		makeAutoObservable(this);
	}

	setСategories(categories) {
		this._categories = categories;
	}

	setSelectedСategory(category) {
		this._selectedСategory = category;
	}
	setProducts(products) {
		this._products = products;
	}
	get categories() {
		return this._categories;
	}
	get products() {
		return this._products;
	}
	get selectedСategory() {
		return this._selectedСategory;
	}
}
