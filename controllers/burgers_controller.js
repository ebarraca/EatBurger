var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
var connection = require("../config/connection.js");


// router.get("/", function(req, res) {
//   // burger.all(function(data) {
//   //   var hbsObject = {
//   //     burger: data
//   //   };
//   //   console.log(hbsObject);
//   //   res.render("index", hbsObject);
//   // });
// });

router.post("/api/burgers", function(req, res){
    burger.create(
        ['burger_name'], [req.body.burger_name], function(result){
        console.log(result);
        // This sends back the result object of the new burger to the user
       return res.json({post: result});
       return res.redirect("/index");
    });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//
//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
