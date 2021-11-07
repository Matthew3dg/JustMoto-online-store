import React from 'react';
import { useHistory } from 'react-router-dom';

function ProductCard({ product }) {
	//для динамического перехода на страницу каждого отдельного товара
	const history = useHistory();

	function addToCart(id, title, img, description, price) {
		let cart = JSON.parse(localStorage.getItem('cart'));

		if (cart) {
			if (cart[id]) {
				console.log(
					'Уже существует запись в локалсторэйдж, увеличивается счетчик товара.'
				);
				cart[id].counter++;
				localStorage.setItem('cart', JSON.stringify(cart));
			} else {
				console.log('Добавляется запись в локалсторэйдж.');
				cart[id] = {};
				cart[id].img = img;
				cart[id].title = title;
				cart[id].price = price;
				cart[id].description = description;
				// инициализация для правильного определения типа
				cart[id].counter = 0;
				// затем увеличение количества
				cart[id].counter++;
				localStorage.setItem('cart', JSON.stringify(cart));
			}
		} else {
			console.log('Создаётся корзина и добавляется запись в локалсторэйдж.');
			let cart = {};
			cart[id] = {};
			cart[id].img = img;
			cart[id].title = title;
			cart[id].price = price;
			// инициализация для правильного определения типа
			cart[id].counter = 0;
			// затем увеличение количества
			cart[id].counter++;
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}

	return (
		<div className="catalog__cardRow">
			<div className="catalog__card card">
				<div onClick={() => history.push('/product/' + product.id)}>
					<div className="card__lable card__lable_hit cardLable">
						Хит продаж
					</div>
					<div className="card__photo">
						<img src={'http://localhost:5000/' + product.img} alt="card1" />
					</div>
					<div className="card__text">{product.title} </div>
					<ul className="card__priceRow">
						<li className="card__price">{product.price} руб.</li>
						<li className="card__quantity">Много на складе</li>
					</ul>
				</div>
				<div
					className="card__button btn"
					onClick={() => {
						addToCart(
							product.id,
							product.title,
							product.img,
							product.description,
							product.price
						);
					}}
				>
					В корзину
				</div>
			</div>
		</div>
	);
}
export default ProductCard;
