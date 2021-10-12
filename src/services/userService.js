<<<<<<< HEAD
const path = require("path");
const fs = require("fs");

const usersFilePath = path.join(__dirname, "../dataBase/usersDataBase.json");
const products = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const userService = {
  findOneById(id) {
    const user = users.find((user) => {
      return user.id == id;
    });
    return user;
  },

  createOne(payload, image) {
    const lastUser = users[users.length - 1];
    const biggestUserId = users.length > 0 ? lastUser.id : 1;
    const user = {
      ...payload,
      id: biggestUserId + 1,
      name: req.body.name,
      email: req.body.email,
      birthdate: req.body.birthdate,
      password: bcrypt.hashSync(req.body.password, 10),
      image: image ? image.filename : "default-image.png",
      delete: false,
    };
    users.push(user);
    this.save();
  },

  editOne(id, payload, image) {
    const user = this.findOneById(id);
    user.name = payload.name;
    user.email = payload.email;
    user.birthdate = payload.birthdate;
    user.password = payload.password;
    user.image = image ? image.filename : user.image;
    this.save();
  },
  destroyOne(id) {
    const user = this.findOneById(id);
    user.deleted = true;
    this.save();
  },

  save() {
    const jsonString = JSON.stringify(users, null, 4);
    fs.writeFileSync(usersFilePath, jsonString);
  },
};

module.exports = userService;
=======
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const usersFilePath = path.join(__dirname, "../dataBase/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const userService = {
  findAll() {
    const allUsers = users;
    return allUsers;
  },

  findOneById(id) {
    const user = users.find((user) => {
      return user.id == id;
    });
    return user;
  },
  
  findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},

  createOne(payload, image) {
    const lastUser = users[users.length - 1];
    const biggestUserId = users.length > 0 ? lastUser.id : 1;
    const user = {
      ...payload,
      id: biggestUserId + 1,
      name: payload.name,
      email: payload.email,
      birthdate: payload.birthdate,
      password: bcrypt.hashSync(payload.password, 10),
      image: image ? image.filename : "default-image.png",
      delete: false,
    };
    users.push(user);
    this.save();
  },

  editOne(id, payload, image) {
    const user = this.findOneById(id);
    user.name = payload.name;
    user.email = payload.email;
    user.birthdate = payload.birthdate;
    user.password = payload.password;
    user.image = image ? image.filename : user.image;
    this.save();
  },
  destroyOne(id) {
    const user = this.findOneById(id);
    user.deleted = true;
    this.save();
  },

  save() {
    const jsonString = JSON.stringify(users, null, 4);
    fs.writeFileSync(usersFilePath, jsonString);
  },
};

module.exports = userService;
>>>>>>> e7eea0b9ed9b8a46c2fbc260e74320a40d4fbf6f
