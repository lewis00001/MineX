DROP DATABASE IF EXISTS mine_db;
CREATE DATABASE mine_db;

USE mine_db;

CREATE TABLE minerals(
	id int NOT NULL AUTO_INCREMENT,
	mineral_name VARCHAR(200) NOT NULL,
    price INT NOT NULL,
    quantity INT default 0, 
	PRIMARY KEY (id)
);