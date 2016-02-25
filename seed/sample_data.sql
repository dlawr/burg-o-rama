insert into meats (name, available) values ('beef', 'true');
insert into buns (name, available) values ('rye', 'true');
insert into cheeses (name, available) values ('swiss', 'true');
insert into toppings (name, available) values ('lettuce', 'true');
insert into burgers (name, doneness, meat, bun) values ('peter petrov', 'charcoal', '1', '1');
insert into cheese_join (b_id, c_id) values ('1', '1');
insert into topping_join (b_id, t_id) values ('1', '1');

insert into meats (name, available) values ('bison', 'true');
insert into buns (name, available) values ('brioche', 'true');
insert into cheeses (name, available) values ('muenster', 'true');
insert into toppings (name, available) values ('tomatoes', 'true');
insert into toppings (name, available) values ('caramelized onions', 'true');
insert into toppings (name, available) values ('dijon mustard', 'true');
insert into burgers (name, doneness, meat, bun) values ('colin hart', 'medium-rare', '2', '2');
insert into cheese_join (b_id, c_id) values ('2', '2');
insert into topping_join (b_id, t_id) values ('2', '2');
insert into topping_join (b_id, t_id) values ('2', '3');
insert into topping_join (b_id, t_id) values ('2', '4');

insert into meats (name, available) values ('28-day dry-aged ground brisket', 'true');
insert into buns (name, available) values ('whole-wheat', 'true');
insert into cheeses (name, available) values ('swiss', 'true');
insert into cheeses (name, available) values ('blue', 'true');
insert into toppings (name, available) values ('lettuce', 'true');
insert into toppings (name, available) values ('tomatoes', 'true');
insert into toppings (name, available) values ('pickles', 'true');
insert into burgers (name, doneness, meat, bun) values ('jason seminara', 'charcoal', '1', '1');
insert into cheese_join (b_id, c_id) values ('3', '3');
insert into cheese_join (b_id, c_id) values ('3', '4');
insert into topping_join (b_id, t_id) values ('3', '5');
insert into topping_join (b_id, t_id) values ('3', '6');
insert into topping_join (b_id, t_id) values ('3', '7');
