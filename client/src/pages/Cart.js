import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';

const Cart = () => {
	let cart = JSON.parse(localStorage.getItem('cart'));
	let cartArray = [];
	if (cart) cartArray = Object.entries(cart);

	//const [cartAmountState, setCartAmountState] = useState(0);
	//useEffect(() => {}, [cartAmountState]);

	console.log(cartArray);
	// отрисовка корзины
	function renderCart() {
		// for (let [key, value] of Object.entries(cart)) {
		// 	console.log(key);
		// 	// сумма для каждого товара
		// 	let sum = parseInt(value.price) * value.counter;
		// 	return <CartItem id={key} cartItem={value} sum={sum} cart={cart} />;
		// }
		// cartArray.map((item, index, arr) => {
		// 	// сумма для каждого товара
		// 	console.log(item[0]);
		// 	console.log(item[1]);
		// 	let sum = parseInt(item[1].price) * item[1].counter;
		// 	<CartItem id={item[0]} cartItem={item[1]} sum={sum} cart={arr} />;
		// });
	}

	// подсчет общей суммы товаров в корзине
	function cartAmount() {
		let cart = JSON.parse(localStorage.getItem('cart'));
		let amount = 0;
		for (let [key, value] of Object.entries(cart)) {
			// сумма для каждого товара
			let sum = parseInt(value.price) * value.counter;
			// сумма для всей корзины
			amount += sum;
		}
		return amount;
	}

	return (
		<div className="content footer_ivoryColor">
			<div className="header">
				<h1 className="header__title title">Корзина</h1>
			</div>
			<div className="container">
				<div className="cart">
					<div className="cart__total">
						<h2 className="cart__title title">Товары в корзине на сумму:</h2>
					</div>
					<div className="cart__amount">{cartAmount()} руб.</div>
					<a href="checkout.html">
						<div className="cart__orderButton btn">Оформить заказ</div>
					</a>
				</div>
				<div className="products">
					{cartArray.map((item, index, arr) => (
						<CartItem
							key={item[0]}
							index={index}
							id={item[0]}
							cartItem={item[1]}
							cart={arr}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cart;
