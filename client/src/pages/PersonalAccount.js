import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Context } from '..';
import exitArrow from '../components/img/exitArrow.svg';

const PersonalAccount = observer(() => {
	const { user } = useContext(Context);
	const history = useHistory();

	const logOut = () => {
		user.setUser({});
		user.setIsAuth(false);
		localStorage.removeItem('token');
		alert('Вы успшно вышли из аккаунта');
		history.push('/login');
	};

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
							<a href="/cart">
								<div className="personalAccount__cartButton btn">Корзина</div>
							</a>
							<a onClick={() => logOut()}>
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
								<input type="text" name="surname" placeholder="surname" />
							</p>
							<p className="buyerData__field">
								Имя:
								<input type="text" name="name" placeholder="name" />
							</p>
							<p className="buyerData__field">
								Отчество:
								<input type="text" name="middleName" placeholder="middleName" />
							</p>
							<p className="buyerData__field">
								E-mail:
								<input type="email" name="email" placeholder="email" />
							</p>
							<p className="buyerData__field">
								Телефон:
								<input type="tel" name="tel" placeholder="tel" />
							</p>
							<p className="buyerData__field">
								Пароль:
								<input type="password" name="password" placeholder="password" />
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
});

export default PersonalAccount;
