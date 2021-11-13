const express = require('express');
const sequelize = require('./db.js');
const models = require('./models/models.js');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index.js');
const errorHandler = require('./middleware/ErrorHandlerMiddleware.js');
const path = require('path');
const PORT = 5000;

const app = express();
app.use(cors()); //для запросов из браузера
app.use(express.json()); //для чтения json
app.use(fileUpload({})); //для загрузки файлов
// для того чтобы сервер умел работать со статикой и отдавать её на клиент
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);

// Обработка ошибок и возврат ответа на клиент
app.use(errorHandler); //должен регистрироваться в конце

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Server has been started' });
});

async function start() {
	try {
		await sequelize.authenticate();
		console.log('Подключение к БД just_moto успешно установлено');
		await sequelize.sync({ alter: true }); // синхронизирует все таблицы
		app.listen(PORT, () => {
			console.log('Server has been started on PORT 5000...');
		});
	} catch (error) {
		console.log(error);
	}
}

start();
