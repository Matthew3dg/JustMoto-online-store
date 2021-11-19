import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import { createOrder, createOrderProduct } from '../http/orderAPI';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const Cart = observer(() => {
	const { user } = useContext(Context);
	let customerId = user._user.id;
	console.log(customerId);

	let cart = JSON.parse(localStorage.getItem('cart'));
	let cartArray = [];
	if (cart) cartArray = Object.entries(cart);

	//const [cartAmountState, setCartAmountState] = useState(0);
	//useEffect(() => {}, [cartAmountState]);

	//console.log(cartArray);

	// подсчет общей суммы товаров в корзине
	function cartAmount() {
		let cart = JSON.parse(localStorage.getItem('cart'));
		let amount = 0;
		for (let [key, value] of Object.entries(cart)) {
			// сумма для каждого товара
			let sum = parseInt(value.price) * value.counter;
			// сумма для всей корзины
			amount += sum;
		}
		return amount;
	}
	let amount = cartAmount();

	const order = async () => {
		try {
			let cart = JSON.parse(localStorage.getItem('cart'));
			let productId = '';
			let counter = 0;
			let order = await createOrder(customerId, amount);
			console.log(order);
			for (let [key, value] of Object.entries(cart)) {
				productId = key;
				counter = value.counter;
				// data - это ответ от сервера
				let data = await createOrderProduct(productId, order.id, counter);
			}
			alert(
				`Заказ успешно сформирован. Номер вашего заказа: ${order.id}, сумма заказа: ${order.amount} `
			);
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	return (
		<div className="content footer_ivoryColor">
			<div className="header">
				<h1 className="header__title title">Корзина</h1>
			</div>
			<div className="container">
				<div className="cart">
					<div className="cart__total">
						<h2 className="cart__title title">Товары в корзине:</h2>
					</div>
					{/* <div className="cart__amount">{cartAmount()} руб.</div> */}
					<a>
						<div
							className="cart__orderButton btn"
							onClick={() => {
								order();
							}}
						>
							Оформить заказ
						</div>
					</a>
				</div>
				<div className="products">
					{cartArray.map((item, index, arr) => (
						<CartItem
							key={item[0]}
							index={index}
							id={item[0]}
							cartItem={item[1]}
							cart={arr}
						/>
					))}
				</div>
			</div>
		</div>
	);
});

export default Cart;
