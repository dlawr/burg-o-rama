DROP TABLE IF EXISTS burgers_db;


CREATE TABLE burgers
(
  id serial primary key,
	name varchar(255) not null,
  doneness varchar(255) not null,
  meat references meats,
  bun references buns
);

CREATE TABLE meats
(
  id serial primary key,
	name varchar(255) not null,
  available text
);

CREATE TABLE buns
(
  id serial primary key,
	name varchar(255) not null,
  available text
);

CREATE TABLE cheeses
(
  id serial primary key,
	name varchar(255) not null,
  available text
);

CREATE TABLE toppings
(
  id serial primary key,
	name varchar(255) not null,
  available text
);

CREATE TABLE cheese_join
(
  b_id references burgers,
  c_id references cheeses
  primary key(b_id, c_id)
);

CREATE TABLE topping_join
(
  b_id references burgers,
  t_id references toppings,
  primary key(b_id, t_id)
);
