import React from 'react';
import exitArrow from '../components/img/exitArrow.svg';

function PersonalAccount() {
	return (
		<div className="content">
			<div className="header">
				<h1 className="header__title title">Личный кабинет</h1>
			</div>
			<div className="container">
				<form className="personalAccount" action="#" method="GET">
					<div className="personalAccount__row">
						<div className="personalAccount__col buyerData">
							<h2 className="registration__title categoryTitle">
								Личный кабинет
							</h2>
							<a href="personalAccount.html">
								<div className="personalAccount__profileButton btn">
									Профиль
								</div>
							</a>
							<a href="cart.html">
								<div className="personalAccount__cartButton btn">Корзина</div>
							</a>
							<a href="personalAccount.html">
								<div className="personalAccount__exitButton btn">
									<img src={exitArrow} alt="exitArrow" />
									Выход
								</div>
							</a>
						</div>

						<div className="personalAccount__col buyerData">
							<h2 className="registration__title categoryTitle">
								Профиль пользователя
							</h2>
							<p className="buyerData__field">
								Фамилия:
								<input type="text" name="surname" defaultValue="surname" />
							</p>
							<p className="buyerData__field">
								Имя:
								<input type="text" name="name" defaultValue="name" />
							</p>
							<p className="buyerData__field">
								Отчество:
								<input
									type="text"
									name="middleName"
									defaultValue="middleName"
								/>
							</p>
							<p className="buyerData__field">
								E-mail:
								<input type="email" name="email" defaultValue="email" />
							</p>
							<p className="buyerData__field">
								Телефон:
								<input type="tel" name="tel" defaultValue="tel" />
							</p>
							<p className="buyerData__field">
								Пароль:
								<input
									type="password"
									name="password"
									defaultValue="password"
								/>
							</p>
							<p className="buyerData__field">
								Пароль ещё раз:
								<input
									type="password"
									name="password"
									defaultValue="password"
								/>
							</p>
							<button
								className="personalAccount__submitButton btn"
								type="submit"
							>
								Сохранить
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default PersonalAccount;
