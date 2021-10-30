import React from 'react';
import { useHistory } from 'react-router-dom';

function ProductCard({ product }) {
	//для динамического перехода на страницу каждого отдельного товара
	const history = useHistory();

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
				<div data-id="art0000" className="card__button btn">
					В корзину
				</div>
			</div>
		</div>
	);
}
export default ProductCard;
