import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import {
	createCategory,
	createProduct,
	fetchCategories,
} from '../http/productAPI.js';
import { Context } from '../index.js';

const Admin = observer(() => {
	const { product } = useContext(Context);
	useEffect(() => {
		fetchCategories().then((categories) => (product._categories = categories));
	}, []);
	// состояние для добавления категории
	const [value, setValue] = useState('');

	// состояния для добавления товара
	const [title, setTitle] = useState('');
	const [file, setFile] = useState(null);
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [categ, setCateg] = useState('');

	const addCategory = () => {
		createCategory({ name: value }).then((data) => {
			setValue('');
		});
	};
	const addProduct = () => {
		console.log(title);
		console.log(file);
		console.log(description);
		console.log(price);
		console.log(categ);

		const formData = new FormData();
		formData.append('title', title);
		formData.append('img', file);
		formData.append('description', description);
		formData.append('price', `${price}`);
		formData.append('categoryId', categ);
		createProduct(formData).then(() => {
			alert('Продукт успешно добавлен');
		});
	};

	const selectFile = (event) => {
		setFile(event.target.files[0]);
	};

	return (
		<div className="content">
			<div className="header">
				<h1 className="header__title title">Админ панель</h1>
			</div>
			<div className="container">
				<div className="registration">
					<div className="registration__buyerData buyerData">
						<div className="registration__headerRow">
							<h2 className="registration__title categoryTitle">
								Добавить товар
							</h2>
						</div>
						<p className="buyerData__field">
							Название:
							<input
								type="text"
								name="title"
								placeholder="title"
								value={title}
								onChange={(event) => {
									setTitle(event.target.value);
									console.log(event.target.value);
								}}
							/>
						</p>
						<p className="buyerData__field">
							Изображение:
							<input
								type="file"
								name="img"
								accept="image/*"
								onChange={selectFile}
							/>
						</p>
						<p className="buyerData__field">
							Описание:
							<input
								type="text"
								name="description"
								placeholder="description"
								value={description}
								onChange={(event) => setDescription(event.target.value)}
							/>
						</p>
						<p className="buyerData__field">
							Цена:
							<input
								type="number"
								name="price"
								placeholder="100500"
								value={price}
								onChange={(event) => {
									setPrice(Number(event.target.value));
									console.log('Введённая цена: ' + event.target.value);
								}}
							/>
						</p>
						<p className="buyerData__field">
							Категория:
							<select
								name="categoryId"
								id="catalogSort"
								onChange={(event) => {
									setCateg(event.target.value);
									//console.log('Выбранная категория: ' + event.target.value);
								}}
							>
								{product.categories.map((category) => {
									//console.log('category.id: ' + category.id);
									return (
										<option key={category.id} value={category.id}>
											{category.name}
										</option>
									);
								})}
							</select>
						</p>
					</div>
					<button className="registration__button btn" onClick={addProduct}>
						Добавить
					</button>
					<button className="registration__button btn btn_clear" type="reset">
						Очистить данные
					</button>
				</div>

				<form className="registration" action="#" method="get">
					<div className="registration__buyerData buyerData">
						<div className="registration__headerRow">
							<h2 className="registration__title categoryTitle">
								Добавить категорию
							</h2>
						</div>
						<p className="buyerData__field">
							Название:
							<input
								type="text"
								name="name"
								placeholder="name"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						</p>
					</div>
					<button className="registration__button btn" onClick={addCategory}>
						Добавить
					</button>
					<button className="registration__button btn btn_clear" type="reset">
						Очистить данные
					</button>
				</form>
			</div>
		</div>
	);
});

export default Admin;
