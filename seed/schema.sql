DROP TABLE IF EXISTS burgers CASCADE;
DROP TABLE IF EXISTS meats CASCADE;
DROP TABLE IF EXISTS buns CASCADE;
DROP TABLE IF EXISTS cheeses CASCADE;
DROP TABLE IF EXISTS toppings CASCADE;
DROP TABLE IF EXISTS cheese_join CASCADE;
DROP TABLE IF EXISTS topping_join CASCADE;


CREATE TABLE meats
(
  id serial primary key unique,
	name varchar(255) not null,
  available text
);

CREATE TABLE buns
(
  id serial primary key unique,
	name varchar(255) not null,
  available text
);

CREATE TABLE cheeses
(
  id serial primary key unique,
	name varchar(255) not null,
  available text
);

CREATE TABLE toppings
(
  id serial primary key unique,
	name varchar(255) not null,
  available text
);

CREATE TABLE burgers
(
  id serial primary key unique,
  name varchar(255) not null,
  doneness varchar(255) not null,
  meat integer references meats,
  bun integer references buns
);

CREATE TABLE cheese_join
(
  b_id integer references burgers,
  c_id integer references cheeses,
  PRIMARY KEY (b_id, c_id)
);

CREATE TABLE topping_join
(
  b_id integer references burgers,
  t_id integer references toppings,
  PRIMARY KEY (b_id, t_id)
);
