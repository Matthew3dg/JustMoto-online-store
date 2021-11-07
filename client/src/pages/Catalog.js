import React, { useContext, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import { fetchCategories, fetchProducts } from '../http/productAPI';

const Catalog = observer(() => {
	const { product } = useContext(Context);

	useEffect(() => {
		fetchCategories().then((categories) => (product._categories = categories));
		fetchProducts().then((products) => (product._products = products));
	}, []);

	useEffect(() => {}, [product._selectedCategory, product._products]);

	return (
		<div className="content">
			<div className="header">
				<h1 className="header__title title">Каталог</h1>
			</div>
			<div className="catalog">
				<div className="container">
					<div className="catalog__body">
						<aside className="catalog__sidebar sidebar">
							<div className="sidebar__categoryTitle categoryTitle">
								Категории
							</div>
							<ul className="sidebar__categoryList">
								{product.categories.map((category) => {
									return (
										<li
											className="sidebar__categoryItem"
											onClick={() => {
												product._selectedCategory = category;
												console.log(product._selectedCategory.name);
												fetchProducts(product._selectedCategory.id).then(
													(products) => (product._products = products)
												);
											}}
											key={category.id}
										>
											{category.name}
										</li>
									);
								})}
							</ul>
							<button
								className="sidebar__categoryItem btn"
								onClick={() => {
									fetchProducts().then(
										(products) => (product._products = products)
									);
								}}
							>
								Очистить
							</button>
						</aside>
						<main className="catalog__mainContent">
							<div className="catalog__sort">
								<div className="catalog__sortLabel">Сортировать по:</div>
								<select name="sort" id="catalogSort">
									<option value="increment">Возрастанию цены</option>
									<option value="decrement">Убыванию цены</option>
								</select>
							</div>
							<div className="catalog__wrapper">
								<div className="catalog__cards">
									{/* контейнер для товаров каталога*/}
									{product.products.map((product) => (
										<ProductCard key={product.id} product={product} />
									))}
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Catalog;
