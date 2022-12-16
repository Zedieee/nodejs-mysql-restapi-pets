CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE pets (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    age INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE pets;

INSERT INTO pets VALUES
 (1,'Deku', 5),
 (2,'Mochi', 4),
 (3,'Kayn', 2),
 (4,'Peanut', 3),
 (5,'Duvalin', 3);
 
