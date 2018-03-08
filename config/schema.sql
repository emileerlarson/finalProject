DROP DATABASE final_db;

CREATE DATABASE final_db;

USE final_db;

CREATE TABLE users (
	user_id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(500) NOT NULL,
	password VARCHAR(500) NOT NULL,
    email VARCHAR(50) NOT NULL, 
    picture VARCHAR(500) NOT NULL,
    PRIMARY KEY (user_id),
    FOREIGN KEY (interest_id) REFERENCES interests(interest_id)
);

CREATE TABLE events (
	event_id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    month VARCHAR(50) NOT NULL,
    date VARCHAR(50) NOT NULL,
    time VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL, 
    address VARCHAR(500) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip VARCHAR(50) NOT NULL,
    PRIMARY KEY (event_id),
    FOREIGN KEY (interest_id) REFERENCES interests(interest_id)
);

CREATE TABLE interests (
	interest_id INT(11) NOT NULL AUTO_INCREMENT,
    outdoor VARCHAR(50) NOT NULL,
    art VARCHAR(50) NOT NULL,
    music VARCHAR(50) NOT NULL,
    fitness VARCHAR(50) NOT NULL,
    gameScifi VARCHAR(50) NOT NULL,
    education VARCHAR(50) NOT NULL,
    pet VARCHAR(50) NOT NULL,
    culture VARCHAR(50) NOT NULL,
    business VARCHAR(50) NOT NULL,
    family VARCHAR(50) NOT NULL,
    social VARCHAR(50) NOT NULL,
    foodDrink VARCHAR(50) NOT NULL,
    PRIMARY KEY (interest_id)
);