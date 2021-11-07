import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import deleteProduct from './img/cart/Крестик.svg';

const CartItem = ({ index, id, cartItem, cart }) => {
	//для динамического перехода на страницу каждого отдельного товара
	const history = useHistory();
	useEffect(() => {}, [cart]);
	let sum = cartItem.counter * cartItem.price;
	// увеличение количества товаров
	function incrementFunction() {
		//let cart = JSON.parse(localStorage.getItem('cart'));
		cartItem.counter++;
		localStorage.setItem('cart', JSON.stringify(Object.fromEntries(cart)));
	}

	// уменьшение количества товаров
	function decrementFunction() {
		//let cart = JSON.parse(localStorage.getItem('cart'));
		if (cartItem.counter - 1 == 0) {
			deleteFunction();
			return true;
		}
		cartItem.counter--;
		localStorage.setItem('cart', JSON.stringify(Object.fromEntries(cart)));
	}

	// удаление товаров
	function deleteFunction() {
		//let cart = JSON.parse(localStorage.getItem('cart'));
		cart.splice(index, 1);
		localStorage.setItem('cart', JSON.stringify(Object.fromEntries(cart)));
	}

	return (
		<div className="product">
			<div className="product__row">
				<div
					className="product__image"
					onClick={() => history.push('/product/' + id)}
				>
					<img
						src={'http://localhost:5000/' + cartItem.img}
						alt="Rebelhorn CubbyIII"
					/>
				</div>
				<h3 className="product__title">{cartItem.title}</h3>
				<div className="product__body productBody">
					<div className="productBody__headerRow">
						<div className="productBody__headerColumn">
							<div className="productBody__price">{cartItem.price} руб.</div>
							<div className="productBody__priceLable priceLable">
								цена за шт
							</div>
						</div>
						<div className="productBody__headerColumn">
							<div className="productBody__counter quantityCounter">
								<span
									className="quantityCounter__decrement"
									onClick={() => {
										decrementFunction();
									}}
								>
									-
								</span>
								<span className="quantityCounter__counter">
									{cartItem.counter}
								</span>
								<span
									className="quantityCounter__increment"
									onClick={() => {
										incrementFunction();
									}}
								>
									+
								</span>
							</div>
							<div className="productBody__priceLable priceLable">шт</div>
						</div>
						<div className="productBody__headerColumn">
							<div className="productBody__totalPrice">{sum} руб.</div>
						</div>
						<div className="productBody__headerColumn">
							<div
								className="productBody__delete"
								onClick={() => {
									deleteFunction();
								}}
							>
								<img
									className="deleteProduct"
									src={deleteProduct}
									alt="deleteProduct"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CartItem;
