var express = require("express");
var bodyParser = require ("body-parser");
var exphbs = require("express-handlebars");
var mysql = require ("mysql");

var app = express();
app.use(bodyParser.urlencoded({
    extended:false
}))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var port = 3000;
app.listen(port);

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "burgers_db"
  });

  connection.connect(function(err){
      if(err)throw err;
      console.log('Connected as id: '+connection.threadId);
  })

  // Use Handlebars to render the main index.html page with the burgers in it.
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers", function(err, data) {
      if (err) {
        return res.status(500).end();
      }

      res.render("index", { burgers: data });
    });
  });

  // Create a new burger
  app.post('/create', function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
      if (err) {
        res.redirect('/');
      }
      //
      // // Send back the ID of the new movie
      // res.json({ id: result.insertId });
      // console.log({ id: result.insertId });
    });
  });
