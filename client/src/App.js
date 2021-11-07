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
	//const [loading, setLoading] = useState(true);

	//если массив зависимостей пустой то отрабтает один раз при запуске приложения
	useEffect(() => {
		check().then(() => {
			user.setUser(user);
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
