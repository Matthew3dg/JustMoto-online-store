'use strict';
// Структура корзины(пример для наглядности)

// let cart = {
// 	art0000: {
// 		img: 'img/catalog/card1.jpg',
// 		title:
// 			'Мотоштаны текстильные Rebelhorn CubbyIII серый/черный/флуо/желтый (XS)',
// 		price: '13 200 руб.',
// 		counter: 1,
// 	},
// 	art0001: {
// 		img: 'img/catalog/card2.jpg',
// 		title:
// 			'Мотокуртка текстильная Rebelhorn Borg черный/серый/флуо/желтый (XS)',
// 		price: '18 500 руб.',
// 		counter: 1,
// 	},
// };

document.addEventListener('click', (event) => {
	//console.log(event.target.classList);
	if (event.target.classList.contains('quantityCounter__increment')) {
		incrementFunction(event.target.dataset.id);
	}
	if (event.target.classList.contains('quantityCounter__decrement')) {
		decrementFunction(event.target.dataset.id);
	}
	// удаление товара по нажатию на крестик
	if (event.target.classList.contains('deleteProduct')) {
		deleteFunction(event.target.dataset.id);
	}
});

// увеличение количества товаров
function incrementFunction(id) {
	let cart = JSON.parse(localStorage.getItem('cart'));
	cart[id].counter++;
	localStorage.setItem('cart', JSON.stringify(cart));
	renderCart();
}

// уменьшение количества товаров
function decrementFunction(id) {
	let cart = JSON.parse(localStorage.getItem('cart'));
	if (cart[id].counter - 1 == 0) {
		deleteFunction(id);
		return true;
	}
	cart[id].counter--;
	localStorage.setItem('cart', JSON.stringify(cart));
	renderCart();
}

// удаление товаров
function deleteFunction(id) {
	let cart = JSON.parse(localStorage.getItem('cart'));
	delete cart[id];
	localStorage.setItem('cart', JSON.stringify(cart));
	renderCart();
}

// отрисовка корзины
function renderCart() {
	let amountWrapper = document.querySelector('.cart__amount');
	let amount = 0;

	let productsWrapper = document.querySelector('.products');
	productsWrapper.innerHTML = '';

	let cart = JSON.parse(localStorage.getItem('cart'));

	for (let [key, value] of Object.entries(cart)) {
		// сумма для каждого товара
		let sum = parseInt(value.price) * value.counter;
		// сумма для всей корзины
		amount += sum;

		let templateProduct = `
		<div class="product">
			<div class="product__row">
				<div class="product__image">
					<img src="${value.img}" alt="Rebelhorn CubbyIII" />
				</div>
				<h3 class="product__title">
					${value.title}
				</h3>
				<div class="product__body productBody">
					<div class="productBody__headerRow">
						<div class="productBody__headerColumn">
							<div class="productBody__price">${value.price}</div>
							<div class="productBody__priceLable priceLable">
								цена за шт
							</div>
						</div>
						<div class="productBody__headerColumn">
							<div class="productBody__counter quantityCounter">
								<span
									class="quantityCounter__decrement"
									data-id="${key}"
								>
									-
								</span>
								<span
									class="quantityCounter__counter"
									data-id="${key}"
								>
								${value.counter}
								</span>
								<span
									class="quantityCounter__increment"
									data-id="${key}"
								>
									+
								</span>
							</div>
							<div class="productBody__priceLable priceLable">шт</div>
						</div>
						<div class="productBody__headerColumn">
							<div class="productBody__totalPrice">${sum} руб.</div>
						</div>
						<div class="productBody__headerColumn">
							<div class="productBody__delete">
								<img
									data-id="${key}"
									class="deleteProduct"
									src="img/cart/Крестик.svg"
									alt="deleteProduct"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`;
		productsWrapper.insertAdjacentHTML('beforeend', templateProduct);
	}
	amountWrapper.innerHTML = `${amount} руб.`;
}
//для отрисовки корзины при открытии страницы
renderCart();
