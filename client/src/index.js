import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/css/index.css';
import ProductStore from './store/ProductStore';
import UserStore from './store/UserStore';

//следим за состоянием переменных isAuth & user
export const Context = createContext(null);

ReactDOM.render(
	//следим за состоянием переменных isAuth & user
	<Context.Provider
		value={{
			user: new UserStore(),
			product: new ProductStore(),
		}}
	>
		<App />
	</Context.Provider>,
	document.getElementById('root')
);
