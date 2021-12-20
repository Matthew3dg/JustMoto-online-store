import React, { useContext, useEffect } from 'react';
import { Context } from '../index.js';
import { observer } from 'mobx-react-lite';

import guarantee from '../components/img/main/guarantee.svg';
import price from '../components/img/main/price.svg';
import delivery from '../components/img/main/delivery.svg';
import helmets from '../components/img/main/helmets.jpg';
import clothing from '../components/img/main/clothing.jpg';
import boots from '../components/img/main/boots.jpg';
import accessories from '../components/img/main/accessories.jpg';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../http/productAPI';

const MainPage = observer(() => {
	const { product } = useContext(Context);
	useEffect(() => {
		fetchProducts().then((products) => (product._products = products));
	}, []);
	return (
		<div>
			<main className="content">
				<section className="mainscreen">
					<div className="container">
						<div className="mainscreen__offer">
							<h1 className="mainscreen__title title">Комбинезон Shima</h1>
							<ul className="mainscreen__textColumn">
								<li className="mainscreen__text">Материал: воловья кожа 6мм</li>
								<li className="mainscreen__text">
									Вентиляционные отверстия для езды в жаркую погоду
								</li>
							</ul>
							<a href="##">
								<div className="mainscreen__button btn">Подробнее</div>
							</a>
						</div>
					</div>
				</section>
				<section className="advantages">
					<div className="container">
						<h2 className="advantages__title title">Преимущества</h2>
						<div className="advantages__row">
							<div className="advantages__item">
								<div className="advantages__icon">
									<img src={guarantee} alt="guarantee" />
								</div>
								<div className="advantages__subtitle">Гарантия качества</div>
								<div className="advantages__text">
									Товары соответствуют <br />
									европейским стандартам ECE 22.05
								</div>
							</div>
							<div className="advantages__item">
								<div className="advantages__icon">
									<img src={price} alt="price" />
								</div>
								<div className="advantages__subtitle">Доступные цены</div>
								<div className="advantages__text">
									В нашем магазине товары <br />
									без наценки на розничные сети
								</div>
							</div>
							<div className="advantages__item">
								<div className="advantages__icon">
									<img src={delivery} alt="delivery" />
								</div>
								<div className="advantages__subtitle">Доставка</div>
								<div className="advantages__text">
									Большой выбор проверенных <br />
									логистических компаний
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="assortment">
					<div className="container">
						<h2 className="assortment__title title">Ассортимент</h2>
						<h3 className="assortment__subtitle">
							В Just Moto найдутся все виды мотоэкипировки
						</h3>
						<div className="assortment__row">
							<a href="#helmets">
								<div className="assortment__item">
									<div className="assortment__photo">
										<img src={helmets} alt="helmets" />
									</div>
									<div className="assortment__lable">Мотошлемы</div>
								</div>
							</a>
							<a href="#clothing">
								<div className="assortment__item">
									<div className="assortment__photo">
										<img src={clothing} alt="clothing" />
									</div>
									<div className="assortment__lable">Мотоодежда</div>
								</div>
							</a>
							<a href="#boots">
								<div className="assortment__item">
									<div className="assortment__photo">
										<img src={boots} alt="boots" />
									</div>
									<div className="assortment__lable">Мотоботинки</div>
								</div>
							</a>
							<a href="accessories">
								<div className="assortment__item">
									<div className="assortment__photo">
										<img src={accessories} alt="accessories" />
									</div>
									<div className="assortment__lable">Аксессуары</div>
								</div>
							</a>
						</div>
					</div>
				</section>
				<section className="theBest">
					<div className="container">
						<h2 className="theBest__title title">Лучшие предложения</h2>
						<div className="theBest__row">
							{product.products.slice(0, 3).map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
});

export default MainPage;
