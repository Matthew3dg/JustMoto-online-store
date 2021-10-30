import React, { useContext } from 'react';
import { Context } from '../index.js';

function Admin() {
	const { product } = useContext(Context);
	return (
		<div className="content">
			<div className="header">
				<h1 className="header__title title">Админ панель</h1>
			</div>
			<div className="container">
				<form
					className="registration"
					action="#"
					method="POST"
					enctype="multipart/form-data"
				>
					<div className="registration__buyerData buyerData">
						<div className="registration__headerRow">
							<h2 className="registration__title categoryTitle">
								Добавить товар
							</h2>
						</div>
						<p className="buyerData__field">
							Название:
							<input type="text" name="title" value="title" />
						</p>
						<p className="buyerData__field">
							Изображение:
							<input type="file" name="file" accept="image/*" />
						</p>
						<p className="buyerData__field">
							Описание:
							<input type="text" name="description" value="description" />
						</p>
						<p className="buyerData__field">
							Цена:
							<input type="number" name="price" value="100500" />
						</p>
						<p className="buyerData__field">
							Категория:
							<select name="selectCategory" id="catalogSort">
								{product.categories.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
							</select>
						</p>
					</div>
					<button className="registration__button btn" type="submit">
						Добавить
					</button>
					<button className="registration__button btn btn_clear" type="reset">
						Очистить данные
					</button>
				</form>

				<form className="registration" action="#" method="get">
					<div className="registration__buyerData buyerData">
						<div className="registration__headerRow">
							<h2 className="registration__title categoryTitle">
								Добавить категорию
							</h2>
						</div>
						<p className="buyerData__field">
							Название:
							<input type="text" name="name" value="name" />
						</p>
					</div>
					<button className="registration__button btn" type="submit">
						Добавить
					</button>
					<button className="registration__button btn btn_clear" type="reset">
						Очистить данные
					</button>
				</form>
			</div>
		</div>
	);
}

export default Admin;
