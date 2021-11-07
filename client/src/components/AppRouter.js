import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes, adminRoutes } from '../routes';

function AppRouter() {
	const { user } = useContext(Context);
	console.log('user.isAuth from  AppRouter: ' + user.isAuth);
	console.log('user.user.role from  AppRouter: ' + user.user.role);
	return (
		// если в Switch не отрабатывает ни один из машрутов(неверный адрес), то отрабатывает последний
		// exact - говорит о том что путь должен точно совпадать
		<Switch>
			{user.user.role === 'ADMIN' &&
				adminRoutes.map(({ path, Component }) => {
					return <Route key={path} path={path} component={Component} exact />;
				})}
			{user.isAuth &&
				authRoutes.map(({ path, Component }) => {
					return <Route key={path} path={path} component={Component} exact />;
				})}
			{publicRoutes.map(({ path, Component }) => {
				return <Route key={path} path={path} component={Component} exact />;
			})}
			{/* перенаправляет на главную */}
			<Redirect to="/" />
		</Switch>
	);
}

export default AppRouter;
