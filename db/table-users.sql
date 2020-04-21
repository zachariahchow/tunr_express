CREATE EXTENSION CITEXT;

CREATE TABLE users (
	id serial PRIMARY KEY,
	email CITEXT NOT NULL,
	password VARCHAR (64) NOT NULL,
	visits INTEGER DEFAULT 0
);