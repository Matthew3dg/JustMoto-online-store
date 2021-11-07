import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';

function AppRouter() {
	const { user } = useContext(Context);
	console.log(user);

	return (
		// если в Switch не отрабатывает ни один из машрутов(неверный адрес), то отрабатывает последний
		<Switch>
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
