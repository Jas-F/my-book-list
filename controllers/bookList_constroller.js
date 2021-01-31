var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var book = require("../models/bookList.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  book.all(function(data) {
    var hbsObject = {
        // connect to table
      bookList: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// api/table name
router.post("/api/bookList", function(req, res) {
  book.create([
    "name", "finished"
  ], [
    req.body.name, req.body.finished
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/bookList/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  book.update({
    finished: req.body.finished
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/bookList/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  book.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
