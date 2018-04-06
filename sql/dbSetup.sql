DROP DATABASE IF EXISTS articles_products;
DROP USER IF EXISTS articles_products_user;
CREATE USER articles_products_user WITH ENCRYPTED PASSWORD 'Boardgamer';
CREATE DATABASE articles_products OWNER articles_products_user;

\c articles_products

SET ROLE articles_products_user;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    product_price DECIMAL(6,2) NOT NULL,
    inventory_num INT NOT NULL
);

CREATE TABLE articles (
    article_id SERIAL PRIMARY KEY,
    article_title VARCHAR(50) NOT NULL,
    article_body TEXT NOT NULL,
    article_author VARCHAR(50) NOT NULL
);

