import React, { useEffect, useState } from 'react';

import { fetchOneProduct } from '../http/productAPI';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
	// const product = {
	// 	id: 1,
	// 	title: 'HJC helmet',
	// 	img: './img/catalog/card3.jpg',
	// 	description: 'шлем с полной защитой головы',
	// 	price: 11600,
	// };
	const [product, setProduct] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetchOneProduct(id).then((product) => setProduct(product));
	}, []);

	return (
		<div className="content footer_ivoryColor">
			<div className="header">
				<h1 className="header__title title">Страница товара</h1>
			</div>
			<div className="container">
				<div className="product">
					<h2 className="product__title title">{product.title}</h2>
					<div className="product__row">
						<div className="product__image">
							<img
								src={'http://localhost:5000/' + product.img}
								alt="product image"
							/>
						</div>
						<div className="product__body productBody">
							<div className="productBody__headerRow">
								<div className="productBody__headerColumn">
									<div className="productBody__price">{product.price} руб.</div>
									<div className="productBody__priceLable priceLable">
										цена за шт
									</div>
								</div>
								<div className="productBody__headerColumn">
									<div className="productBody__counter quantityCounter">
										<span className="quantityCounter__decrement">-</span>
										<span className="quantityCounter__counter">1</span>
										<span className="quantityCounter__increment">+</span>
									</div>
									<div className="productBody__priceLable priceLable">шт</div>
								</div>
								<div className="productBody__headerColumn">
									<div className="productBody__totalPrice">13 200 руб.</div>
								</div>
								<div className="productBody__headerColumn">
									<div className="productBody__button btn">В корзину</div>
								</div>
							</div>
							<h3 className="productBody__title title">Описание товара</h3>
							<p className="productBody__descriptionText">
								{product.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
