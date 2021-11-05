-- we create database hampiyura
CREATE DATABASE hampi_db character set utf8;

-- we use database hampiyura
USE hampi_db;

-- we create the tables


  -- user table
  CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fullName VARCHAR(100) NOT NULL,
  birthdate date NULL NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  avatar VARCHAR(100) NOT NULL,
  admin TINYINT NOT NULL
);

-- products table
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(100) NOT NULL,
  deleted TINYINT NOT NULL,
  category VARCHAR(100) NOT NULL
);

-- compra cart
CREATE TABLE cart (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date DATE NOT NULL,
  total_price DECIMAL NOT NULL,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users(id)
  );

-- compra_producto table
CREATE TABLE compra_producto (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_product INT NOT NULL,
  FOREIGN KEY (id_product) REFERENCES products(id),
  id_cart INT NOT NULL,
  FOREIGN KEY (id_cart) REFERENCES cart(id)
);





