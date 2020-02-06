DROP DATABASE IF EXISTS rocket_db;
CREATE DATABASE rocket_db;

USE rocket_db;

CREATE TABLE rockets(
	id int NOT NULL AUTO_INCREMENT,
	rocket_name VARCHAR(200) NOT NULL,
    fuel_capacity INT NOT NULL,
	PRIMARY KEY (id)
);