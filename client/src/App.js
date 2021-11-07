import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index.js';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';

const App = observer(() => {
	const { user } = useContext(Context);

	//если массив зависимостей пустой то отрабтает один раз при запуске приложения
	useEffect(() => {
		// здесь res - это возвращаемое значение функции check(декодированный токен)
		check().then((res) => {
			console.log('res from App: ');
			console.log(res);
			user.user.role = res.role;
			user.user.id = res.id;
			user.user.email = res.email;
			//user.setUser(res);
			user.setIsAuth(true);
		});
	}, []);

	return (
		// для того чтобы была возможна постраничная навигация
		<BrowserRouter>
			<NavBar />
			<AppRouter />
			<Footer />
		</BrowserRouter>
	);
});

export default App;
