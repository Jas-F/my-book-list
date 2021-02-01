// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// create book variable reference booklist controller
var book = {
  all: function(cb) {
    orm.all("bookList", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("bookList", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("bookList", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete(condition, cb) {
    orm.delete('bookList', condition, (res) => cb(res));
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = book;