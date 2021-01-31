
DROP DATABASE IF EXISTS bookList_db;
CREATE DATABASE bookList_db;
USE bookList_db;

CREATE TABLE bookList
(
    id int auto_increment not null,
    book varchar(30) not null,
    read BOOLEAN DEFAULT false,
     primary key(id)
):
