// Require requests from models
var model = require('model');

// Send results back as JSON data
modules.exports = {
  tweets: {
    // Functions that handle requests in model
    get: function(req, res) {
      model.tweets.get(function (err, data) {
        if (err) {
          console.error(err);
        } else {
          // Send back data as JSON data
          res.json(data);
        }
      });
    },
    post: function(req, res) {
      // Retrieve data from body
      var params = [req.body[message]]
      model.tweets.post(params, function(err, data) {
        if (err) {
          console.error(err);
        } else {
          res.json(data);
        }
      });
    },
    getById: function(req, res) {
      var params = [req.body[id]];
      model.tweets.getById(params, function(err, data) {
        if (err) {
          console.error(err);
        } else {
          res.json(data);
        }
      });
    },
    put: function(req, res) {
      var params = [req.body[message], req.body[id]]
      model.tweets.put(params, function(err, data) {
        if (err) {
          console.error(err);
        } else {
          res.json(data);
        }
      });
    },
    delete: function(req, res) {
      var params = [req.body[id]];
      model.tweets.delete(params, function(err, data) {
        if (err) {
          console.error(err);
        } else {
          res.json(data);
        }
      })
    }
  }
};

