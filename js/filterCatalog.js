'use strict';
//общаяя функция фильтрации
function filterCategories() {
	// получаем коллекцию категорий в сайдбаре
	const categoriesButons = document.querySelectorAll('.sidebar__categoryItem');
	//получаем все карточки товара
	const cards = document.querySelectorAll('.catalog__cardRow');

	function filter(category, items) {
		items.forEach((item) => {
			//если карточка не принадлежит категории (не содержит нужный класс)
			const isItemFiltered = !item.classList.contains(category);
			//если была нажата кнопка очистить
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
		//добавляем на каждую категорию ивент листенер click
		button.addEventListener('click', () => {
			//записываем категорию в переменную
			const currentCategory = button.dataset.filter;
			//вызываем функцию фильтрации для масива карточек и с нужной категорией
			filter(currentCategory, cards);
			//console.log(button.dataset.filter);
		});
	});
}

filterCategories();
