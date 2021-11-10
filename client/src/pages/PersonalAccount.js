import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Context } from '..';
import exitArrow from '../components/img/exitArrow.svg';
import { update } from '../http/userAPI';

const PersonalAccount = observer(() => {
	const { user } = useContext(Context);
	const history = useHistory();

	const [name, setName] = useState();
	const [phone, setPhone] = useState();
	const [address, setAddress] = useState();

	const logOut = () => {
		user.setUser({});
		user.setIsAuth(false);
		localStorage.removeItem('userData');
		//localStorage.removeItem('token');
		alert('Вы успшно вышли из аккаунта');
		history.push('/login');
	};

	const updateUser = async () => {
		try {
			//здесь data - это объект с полями о пользователе
			let data = await update(name, phone, address, user.user.id);
			console.log('обновлённые и полученые назад данные: ');
			console.log(data);
			localStorage.setItem('userData', JSON.stringify(data));
			user.setUser(user);
			user.setIsAuth(true);
			alert('Данные успешно сохранены');
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	return (
		<div className="content">
			<div className="header">
				<h1 className="header__title title">Личный кабинет</h1>
			</div>
			<div className="container">
				<div className="personalAccount">
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
								Имя:
								<input
									type="text"
									name="name"
									value={name}
									defaultValue={
										JSON.parse(localStorage.getItem('userData'))
											? JSON.parse(localStorage.getItem('userData')).name
											: ''
									}
									onChange={(e) => setName(e.target.value)}
								/>
							</p>
							<p className="buyerData__field">
								Телефон:
								<input
									type="tel"
									name="tel"
									value={phone}
									defaultValue={
										JSON.parse(localStorage.getItem('userData'))
											? JSON.parse(localStorage.getItem('userData')).phone
											: ''
									}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</p>
							<p className="buyerData__field">
								Адрес:
								<input
									type="text"
									name="address"
									value={address}
									defaultValue={
										JSON.parse(localStorage.getItem('userData'))
											? JSON.parse(localStorage.getItem('userData')).address
											: ''
									}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</p>
							<button
								className="personalAccount__submitButton btn"
								onClick={() => {
									updateUser();
								}}
							>
								Сохранить
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default PersonalAccount;
