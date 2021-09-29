'use strict';
//получаем все карточки товара
let cards = document.querySelectorAll('.catalog__cardRow');

//общаяя функция фильтрации
function filterCategories() {
	// получаем коллекцию категорий в сайдбаре
	const categoriesButons = document.querySelectorAll('.sidebar__categoryItem');

	function filter(category, items) {
		items.forEach((item) => {
			const isItemFiltered = !item.classList.contains(category);
			const isShowAll = category === 'all';

			//скрываем ненужные карточки и показываем нужные
			if (isItemFiltered && !isShowAll) {
				item.classList.add('hide');
			} else {
				item.classList.remove('hide');
			}
		});
	}
	// перебираем все категории из сайдбара
	categoriesButons.forEach((button) => {
		button.addEventListener('click', () => {
			console.log(button.innerHTML);
			//записываем категорию в переменную
			const currentCategory = button.dataset.filter;
			//вызываем функцию фильтрации для масива карточек и с нужной категорией
			filter(currentCategory, cards);
		});
	});
}

function sortCards() {
	//получить элемент "селектор"
	const sortKey = document.getElementById('catalogSort');

	//из псевдомсассива делаем массив
	cards = Array.from(cards);
	// добавляем ивент листенер на изменение в селекте и можем получить поле VALUE
	//(по возрастанию или по убыванию)
	sortKey.addEventListener('change', () => {
		console.log(sortKey.value);
		//вызываем функцию сортировки здесь при изменении ключа
		if (sortKey.value === 'increment') {
			document.querySelector('.catalog__cards').innerHTML = '';
			sortInc(cards);
			//отрисовывать новый массив карточек на сайт
			cards.forEach((card) => {
				console.log(card);
				//document.querySelector('.catalog__cards').innerHTML += card.outerHTML;
				document
					.querySelector('.catalog__cards')
					.insertAdjacentElement('beforeend', card);
			});
		} else {
			document.querySelector('.catalog__cards').innerHTML = '';
			sortDec(cards);
			//отрисовывать новый массив карточек на сайт
			cards.forEach((card) => {
				console.log(card);
				//document.querySelector('.catalog__cards').innerHTML += card.outerHTML;
				document
					.querySelector('.catalog__cards')
					.insertAdjacentElement('beforeend', card);
			});
		}
	});

	function sortInc(items) {
		//в цикле получить поле цены у карточки и сортировать
		items.sort(
			(a, b) =>
				parseInt(a.querySelector('.card__price').innerHTML) -
				parseInt(b.querySelector('.card__price').innerHTML)
		);
	}
	function sortDec(items) {
		//в цикле получить поле цены у карточки и сортировать
		items.sort(
			(a, b) =>
				parseInt(b.querySelector('.card__price').innerHTML) -
				parseInt(a.querySelector('.card__price').innerHTML)
		);
	}
}

sortCards();
filterCategories();
