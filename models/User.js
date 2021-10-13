// 1. Guardar al usuario
// 2. Buscar al user que se quiera loguear por su email
// 3. Buscar aun user por su id
// 4. Editar info user
// 5. Eliminar user de db

// CRUD

//--> Creo un obj lit con los métodos

const fs = require('fs');

const User = {
	//--> hacemos referencia al nombre del archivo que queremos utilizar. 
	fileName: './database/users.json',

	//--> traemos los users, leemos el archivo .json en formato de array (method parse)
	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

	generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},

	findAll: function () {
		return this.getData();
	},

	findByPk: function (id) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},

	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},

	//--> creamos un user, y guardamos esa info en nuestro .json
	create: function (userData) {
		let allUsers = this.findAll();
		let newUser = {
			id: this.generateId(),
			...userData
		}
		allUsers.push(newUser);
		fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' '));
		return newUser;
	},

	delete: function (id) {
		let allUsers = this.findAll();
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
		return true;
	}
}

module.exports = User;