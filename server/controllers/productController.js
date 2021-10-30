const uuid = require('uuid'); //для создания уникального имени файла
const path = require('path'); // для определения пути к папке со статикой
const { Product } = require('../models/models.js');
const ApiError = require('../error/ApiError.js');

class ProductController {
	async create(req, res, next) {
		try {
			const { title, description, price, categoryId } = req.body;
			const { img } = req.files;
			//создание уникального имени файла
			let fileName = uuid.v4() + '.jpg';

			img.mv(path.resolve(__dirname, '..', 'static', fileName));

			const product = await Product.create({
				title,
				description,
				img: fileName,
				price,
				categoryId,
			});
			return res.json(product);
		} catch (error) {
			next(ApiError.badRequest(error.message));
		}
	}
	async getAll(req, res) {
		let products = await Product.findAll();
		console.log(
			'========================================================' + products
		);
		return res.json(products);
	}
	async getOne(req, res) {
		const { id } = req.params;
		let product = await Product.findOne({
			where: { id },
		});
		console.log(
			'========================================================' + product
		);
		return res.json(product);
	}
}
module.exports = new ProductController();
