// Representación de la info que tenemos en la base de datos de usuarios
// CRUD (create, read, update, delete)

const fs = require("fs");

const User = {
  fileName: "./dataBase/usersDataBase.json",

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8")); //para que se convierta en array de obj.literales
  },

  generateID: function () {
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

  // Buscar a un usuario que se quiere loguear por su ID
  findById: function (id) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((user) => user.id == id);
    return userFound;
  },

  // Buscar a un usuario que se quiere loguear por su email
  findByEmail: function (email, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((user) => user[email] == text);
    return userFound;
  },

  // Guardar al usuario en la DB
  create: function (userData) {
    let allUsers = this.findAll();
    let newUser = {
      id: this.generateID(),
      ...userData,
    };
    allUsers.push(newUser); //Esto es un array, por lo que tengo que volver a convertirlo para que se guarde en el archivo JSON
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ""));
    return newUser;
  },

  // Editar la info de un usuario

  // Eliminar a un usuario de la DB
  delete: function (id) {
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter((user) => user.id !== id); //esto devolverá todos los usuarios menos el que corresponda al que pasamos como parametro
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ""));
    return true;
  },
};

module.exports = User;
