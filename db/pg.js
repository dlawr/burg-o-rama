'use strict'
var pg = require('pg');
var connectionString = "postgres://dan:wak24pie@localhost/burgers_db";

function deleteBurger(req, res, next) {
  console.log('-------------------deleteBurger');
  next();
}

function showAllBurgers(req, res, next) {
  console.log('--------------------------showAllBurgers');
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    var query = client.query("select\
    with_cheese.id,\
    with_cheese.name,\
    meats.name as meat,\
    with_cheese.doneness,\
    buns.name as bun,\
    array_agg(toppings.name) as all_toppings,\
    all_cheeses\
    from (\
      select\
      burgers.id,\
      burgers.name,\
      burgers.meat,\
      burgers.doneness,\
      burgers.bun,\
      array_agg(cheeses.name) as all_cheeses\
      from\
      burgers\
      inner join cheese_join on burgers.id = cheese_join.b_id\
      inner join cheeses on cheeses.id = cheese_join.c_id\
      group by burgers.name,\
      burgers.id,\
      burgers.meat,\
      burgers.doneness,\
      burgers.bun\
    ) as with_cheese\
    inner join topping_join on with_cheese.id = topping_join.b_id\
    inner join toppings on toppings.id = topping_join.t_id\
    inner join meats on meats.id = with_cheese.meat\
    inner join buns on buns.id = with_cheese.bun\
    group by\
    with_cheese.name,\
    all_cheeses,\
    with_cheese.id,\
    with_cheese.meat,\
    with_cheese.doneness,\
    with_cheese.bun,\
    meats.name,\
    buns.name \
    order by with_cheese.id;", function(err, result) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      res.rows = result.rows
      next()
    });
  });
}

function showOneBurger(req, res, next) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    var query = client.query("select\
    with_cheese.id,\
    with_cheese.name,\
    meats.name as meat,\
    with_cheese.doneness,\
    buns.name as bun,\
    array_agg(toppings.name) as all_toppings,\
    all_cheeses\
    from (\
      select\
      burgers.id,\
      burgers.name,\
      burgers.meat,\
      burgers.doneness,\
      burgers.bun,\
      array_agg(cheeses.name) as all_cheeses\
      from\
      burgers\
      inner join cheese_join on burgers.id = cheese_join.b_id\
      inner join cheeses on cheeses.id = cheese_join.c_id\
      group by burgers.name,\
      burgers.id,\
      burgers.meat,\
      burgers.doneness,\
      burgers.bun\
    ) as with_cheese\
    inner join topping_join on with_cheese.id = topping_join.b_id\
    inner join toppings on toppings.id = topping_join.t_id\
    inner join meats on meats.id = with_cheese.meat\
    inner join buns on buns.id = with_cheese.bun\
    group by\
    with_cheese.name,\
    all_cheeses,\
    with_cheese.id,\
    with_cheese.meat,\
    with_cheese.doneness,\
    with_cheese.bun,\
    meats.name,\
    buns.name \
    where with_cheese.id like $1;", [req.params.id], function(err, result) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      res.rows = result.rows
      next()
    });
  });
}



module.exports.showOneBurger = showOneBurger
module.exports.showAllBurgers = showAllBurgers