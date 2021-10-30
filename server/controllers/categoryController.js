const { Category } = require('../models/models.js'); //модель (таблица)
const ApiError = require('../error/ApiError.js');

class CategoryController {
	async create(req, res) {
		const { name } = req.body;
		// здесь "create" встроенная функция sequelize
		// создаёт запись(строку) в таблице
		const category = await Category.create({ name });
		return res.json(category);
	}
	async getAll(req, res) {
		// здесь "findAll" встроенная функция sequelize
		// осуществляет выборку всех записей(строк) таблицы
		const categories = await Category.findAll();
		return res.json(categories);
	}
}
module.exports = new CategoryController();
