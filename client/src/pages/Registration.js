import React, { useContext, useState } from 'react';
import { registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { useHistory } from 'react-router';

const Registration = observer(() => {
	const history = useHistory();
	const { user } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const signIn = async () => {
		try {
			//здесь data - это декодированный токен
			let data = await registration(email, password);
			user.setUser(user);
			user.setIsAuth(true);
			alert('Регистрация прошла успешно');
			if (user.user.role == 'ADMIN') {
				history.push('/admin');
			} else {
				history.push('/account');
			}
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	return (
		<div className="content">
			<div className="header">
				<h1 className="header__title title">Регистрация</h1>
			</div>
			<div className="container">
				<div className="registration">
					<div className="registration__buyerData buyerData">
						<div className="registration__headerRow">
							<h2 className="registration__title categoryTitle">
								Данные покупателя
							</h2>
							<p className="registration__haveAccount priceLable">
								У вас уже есть аккаунт?
							</p>
							<a href="/login">
								<div className="registration__entryButton btn">Войдите</div>
							</a>
						</div>
						<p className="buyerData__field">
							E-mail:
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								name="email"
								placeholder="email"
							/>
						</p>
						<p className="buyerData__field">
							Пароль:
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								name="password"
								placeholder="password"
							/>
						</p>
					</div>
					<a
						className="registration__button btn"
						onClick={() => {
							signIn();
						}}
					>
						Зарегистрироваться
					</a>
				</div>
			</div>
		</div>
	);
});

export default Registration;
