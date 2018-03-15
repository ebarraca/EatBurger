CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('If Looks Could Kale', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Sweet Home Avocado', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Eggers Cant Be Cheesers', false);
