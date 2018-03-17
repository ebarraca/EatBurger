

var express = require("express");
var bodyParser = require ("body-parser");
var exphbs = require("express-handlebars");
var mysql = require ("mysql");
var connection = require ("./config/connection.js")
var router = require("./controllers/burgers_controller.js")
var burger = require("./models/burger.js");



var app = express();


app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(router);
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var port = 4002;
app.listen(port);


  // Use Handlebars to render the main index.html page with the burgers in it.
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) throw err;

      console.log(data);
      res.render("index", { burgers: data });
    });
  });

  // Create a new burger
  app.post('/', function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger], function(err, result) {
        console.log(req.body);
            res.redirect("/");
        });
    });

    // app.post("/api/burgers", function(req, res) {
    //   burger.create(req.body.burger, function(err, result) {
    //       if (err) throw err;
    //     res.json({ id: result.insertId });
    //   });
    // });

    app.get("/api/burger", function(req, res) {
      burger.selectAll(function(err, result) {
          console.log(result);
          if (err) throw err;
        res.json(result);
      });
    });

    // app.put("/api/burger/:id", function(req, res) {
    //     // console.log(req.body)

    //   burger.updateOne('devoured=1', 'id=' + req.params.id, function(err, data) {
    //       if (err) {
    //       throw err;

    //       console.log('update error' )
    //   }

    //   });
    // });
