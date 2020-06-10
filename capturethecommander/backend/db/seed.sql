DROP DATABASE IF EXISTS capturecommander_db;
CREATE DATABASE capturecommander_db;

\c capturecommander_db;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    password_digest VARCHAR NOT NULL
);

CREATE TABLE matches
(
    id SERIAL PRIMARY KEY,
    player1 VARCHAR NOT NULL,
    player2 VARCHAR NOT NULL,
    whoWon VARCHAR NOT NULL
);