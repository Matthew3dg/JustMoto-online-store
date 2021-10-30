import React, { useContext, useState } from 'react';
import { login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { useHistory } from 'react-router';

const Login = observer(() => {
	const history = useHistory();
	const { user } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const signIn = async () => {
		try {
			//здесь data - это декодированный токен
			let data = await login(email, password);

			user.setUser(true);
			user.setIsAuth(true);
			alert('Авторизация прошла успешно');
			history.push('/account');
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	return (
		<div className="content">
			<div className="header">
				<h1 className="header__title title">Вход</h1>
			</div>
			<div className="container">
				<div className="entry">
					<div className="entry__buyerData buyerData">
						<div className="registration__headerRow">
							<h2 className="entry__title categoryTitle">
								Вход в личный кабинет
							</h2>
							<p className="registration__haveAccount priceLable">
								У вас нет аккаунта?
							</p>
							<a href="/registration">
								<div className="registration__registrationButton btn">
									Зарегистрируйтесь
								</div>
							</a>
						</div>

						<p className="buyerData__field">
							E-mail:
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								name="email"
								defaultValue="email"
							/>
						</p>
						<p className="buyerData__field">
							Пароль:
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								name="password"
								defaultValue="password"
							/>
						</p>
					</div>
					<a
						className="registration__button btn"
						onClick={() => {
							signIn();
						}}
					>
						Войти
					</a>
				</div>
			</div>
		</div>
	);
});

export default Login;
