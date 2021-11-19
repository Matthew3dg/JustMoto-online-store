import { makeAutoObservable } from 'mobx';
import jwt_decode from 'jwt-decode';

export default class UserStore {
	constructor() {
		this._isAuth = localStorage.getItem('token') ? true : false;
		this._user = {
			// id: '',
			// name: '',
			// phone: '',
			// email: '',
			// password: '',
			// address: '',
			role: localStorage.getItem('token')
				? jwt_decode(localStorage.getItem('token')).role
				: false,
		};
		//для того чтобы mobx следил за сосотянием переменных и при изменении перерисовывал компоненты
		makeAutoObservable(this);
	}

	setIsAuth(bool) {
		this._isAuth = bool;
	}
	setUser(user) {
		this._user = user;
	}
	get isAuth() {
		return this._isAuth;
	}
	get user() {
		return this._user;
	}
}
