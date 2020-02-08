DROP DATABASE IF EXISTS rocket_db;
CREATE DATABASE rocket_db;

USE rocket_db;

CREATE TABLE rockets
(
	id int NOT NULL,
	rocket_name VARCHAR(63) NOT NULL,
	storage_capacity INT NOT NULL,
	price INTEGER,
	PRIMARY KEY (id)
);