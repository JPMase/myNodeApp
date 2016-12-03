CREATE DATABASE twittler;

USE twittler;

CREATE TABLE tweets (
  id int NOT NULL AUTO_INCREMENT,
  message varchar(140) NOT NULL,
  PRIMARY KEY (ID)
);