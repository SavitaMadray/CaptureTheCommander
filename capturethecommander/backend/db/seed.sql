DROP DATABASE IF EXISTS userlist;
CREATE DATABASE userlist;

\c userlist;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    password_digest VARCHAR NOT NULL
);

CREATE TABLE matches
(
    id SERIAL PRIMARY KEY,
    player1 VARCHAR NOT NULL UNIQUE,
    player2 VARCHAR NOT NULL UNIQUE,
    whoWon VARCHAR NOT NULL UNIQUE,
)