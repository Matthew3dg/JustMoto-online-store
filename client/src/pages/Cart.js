import React from 'react';

function Cart() {
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
					<div className="cart__amount">0 руб.</div>
					<a href="checkout.html">
						<div className="cart__orderButton btn">Оформить заказ</div>
					</a>
				</div>
				<div className="products">{/* контейнер для товаров в корзине */}</div>
			</div>
		</div>
	);
}

export default Cart;
