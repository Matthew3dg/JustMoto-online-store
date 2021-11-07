import React, { useContext } from 'react';
import logo from './img/menu/logo.svg';
import cart from './img/menu/cart.svg';
import personalAccount from './img/menu/personalAccount.svg';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import { useHistory } from 'react-router';

const NavBar = observer(() => {
	const { user } = useContext(Context);
	const history = useHistory();
	let route = '';

	console.log('user.isAuth: ' + user.isAuth);
	console.log('user.role: ' + user.user.role);

	if (user.isAuth && user.user.role == 'ADMIN') {
		route = '/admin';
	} else if (user.isAuth == true) {
		route = '/account';
	} else {
		route = '/login';
	}

	return (
		<header className="menu">
			<div className="container">
				<nav className="menu__wrapper">
					<a href="/" className="menu__logo">
						<img src={logo} alt="logo" />
					</a>
					<ul className="menu__list">
						<li className="menu__item">
							<a href="/catalog">Каталог</a>
						</li>
						<li className="menu__item">
							<a href="/contacts">Контакты</a>
						</li>
						<li className="menu__item">
							<a href="/howToOrder">Как заказать</a>
						</li>
						<li className="menu__item">
							<a href="/about">О компании</a>
						</li>
					</ul>
					<ul className="menu__right">
						<li className="menu__right-item">
							<a href="tel:+79002351721">+7 900 235 17 21</a>
						</li>
						<li className="menu__right-item">
							<a href="/cart">
								<img src={cart} alt="cart" />
							</a>
						</li>
						<li className="menu__right-item">
							<a onClick={() => history.push(route)}>
								<img src={personalAccount} alt="personalAccount" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
});

export default NavBar;
