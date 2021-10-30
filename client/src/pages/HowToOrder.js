import React from 'react';

function HowToOrder() {
	return (
		<div className="content">
			<div className="header">
				<h1 className="header__title title">Как оформить заказ</h1>
			</div>
			<div className="container">
				<p className="howToOrder">
					Чтобы совершить заказ перейдите на страницу
					<a href="/catalog">"Каталог"</a>, выберите понравившийся товар и
					добавьте его в корзину. Далее заполните необходимые данные в корзине и
					подтвердите оформление заказа.
				</p>
			</div>
		</div>
	);
}

export default HowToOrder;
