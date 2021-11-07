import About from './pages/About';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import Contacts from './pages/Contacts';
import HowToOrder from './pages/HowToOrder';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import PersonalAccount from './pages/PersonalAccount';
import ProductPage from './pages/ProductPage';
import Registration from './pages/Registration';

// маршруты доступные только авторизованным пользователям
export const authRoutes = [
	{
		path: '/account',
		Component: PersonalAccount,
	},
];
// маршруты доступные только администратору
export const adminRoutes = [
	{
		path: '/admin',
		Component: Admin,
	},
];

// маршруты доступные всем пользователям
export const publicRoutes = [
	{
		path: '/',
		Component: MainPage,
	},
	{
		path: '/catalog',
		Component: Catalog,
	},
	{
		path: '/cart',
		Component: Cart,
	},
	{
		path: '/login',
		Component: Login,
	},
	{
		path: '/registration',
		Component: Registration,
	},
	{
		path: '/product/:id',
		Component: ProductPage,
	},
	{
		path: '/about',
		Component: About,
	},
	{
		path: '/howToOrder',
		Component: HowToOrder,
	},
	{
		path: '/contacts',
		Component: Contacts,
	},
];
