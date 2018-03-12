var express = require("express");
var bodyParser = require ("body-parser");
var exphbs = require("express-handlebars");
var mysql = require ("mysql");
var connection = require ("./config/connection.js")

var app = express();
app.use(bodyParser.urlencoded({
    extended:false
}))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var port = 3000;
app.listen(port);

  // Use Handlebars to render the main index.html page with the burgers in it.
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) throw err;

      // Test it
      // console.log('The solution is: ', data);

      // Test it
      // return res.send(data);

      res.render("index", { burgers: data });
    });
  });

  // Create a new burger
  app.post('/', function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger], function(err, result) {
        console.log(req.body.burger);
          // Test it
          // console.log('You sent, ' + req.body.task);

          // Test it
          // return res.send('You sent, ' + req.body.task);
            res.redirect("/");
          // });
        });

      // if (err) {
      //   res.redirect('/');
      //
      // }
      //
      // // Send back the ID of the new movie
      // res.json({ id: result.insertId });
      // console.log({ id: result.insertId });
    });
  // });
