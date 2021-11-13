const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');

const Customer = sequelize.define('customer', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
	phone: { type: DataTypes.STRING, unique: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	address: { type: DataTypes.TEXT },
	role: { type: DataTypes.STRING, defaultValue: 'USER' },
});
const Order = sequelize.define('order', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const OrderProduct = sequelize.define('order_product', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	counter: { type: DataTypes.INTEGER },
});
const Product = sequelize.define('product', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, unique: true },
	img: { type: DataTypes.STRING },
	description: { type: DataTypes.TEXT },
	price: { type: DataTypes.INTEGER },
});
const Category = sequelize.define('category', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true },
});

//помненял с hasMany на hasOne
Customer.hasOne(Order);
Order.belongsTo(Customer);

Category.hasMany(Product);
Product.belongsTo(Category);
// добавил
Order.hasMany(OrderProduct);
OrderProduct.belongsTo(Order);
// добавил
Product.hasMany(OrderProduct);
OrderProduct.belongsTo(Product);

// Order.belongsToMany(Product, { through: OrderProduct });
// Product.belongsToMany(Order, { through: OrderProduct });

module.exports = {
	Customer,
	Order,
	OrderProduct,
	Product,
	Category,
};
