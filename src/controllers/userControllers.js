const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const userService = require("../services/userService");

const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, "../dataBase/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {
  //Register - Form to register
  register: (req, res) => {
    return res.render("register");
  },

  // Create - Method to store a user
  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
    let userInDB = userService.findByField('email', req.body.email);

    if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		const userToCreate = {
			...req.body,
			// password: bcrypt.hashSync(req.body.password, 10)
		}

		const userCreated = userService.createOne(userToCreate);

		return res.redirect('/user/login');
  },

  //Login- Form to login
  login: (req, res) => {
    return res.render("login");
  },

  processLogin: (req, res) => {
    let usuarioALoguearse = userService.findByField('email', req.body.email);

    if(usuarioALoguearse) {
			let isOkThePassword = bcrypt.compareSync(req.body.password, usuarioALoguearse.password);
			if (isOkThePassword) {
        //borramos la pass por seguridad(video)
				delete usuarioALoguearse.password;
				req.session.usuarioLogueado = usuarioALoguearse;

        //cookie remember
        if (req.body.remember_user != undefined) {
        res.cookie("remember_user", usuarioALoguearse.email, {maxAge: 60000})
      }
      return res.render('userProfile');
    }
    return res.render('login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

    return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},

  userProfile: (req, res) => {
    return res.render("userProfile");
  },
};

module.exports = controller;
