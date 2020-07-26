DROP DATABASE IF EXISTS travel_bucket_list_db;

CREATE DATABASE travel_bucket_list_db;
USE travel_bucket_list_db;

CREATE TABLE places(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    visited BOOLEAN DEFAULT FALSE
);