// Require our database
var db = require('db');

// Export modules
modules.export = {
  tweets: {
    // Retrieve tweets
    get: function(callback){
      // Query to retrieve all tweets
      var queryStr = 'SELECT * FROM tweets';
      // Select database and execute queryStr query on it
      dq.query(queryStr, function(err, data) {
          callback(data);
      });
    },
    // Create tweets
    post: function(params, callback){
      // Query to create a tweet
      var queryStr = 'INSERT INTO tweets (message) VALUES (?)';
      dq.query(queryStr, params, function(err, data) {
          callback(data);
      });
    },
    // Retreive single tweet by ID
    getById: function(params, callback) {
      // Query to retrieve by ID
      var queryStr = 'SELECT message FROM tweets WHERE id=(?)';
      db.query(queryStr, params, function(err, data) {
          callback(data);
      });
    }
    // Update a tweet by ID
    put: function(params, callback){
      // Query to update by ID
      var queryStr = 'UPDATE tweets SET message=(?) WHERE id=(?)';
      dq.query(queryStr, params, function(err, data) {
          callback(data);
      });
    },
    // Remove a tweet by ID
    delete: function(params, callback){
      // Query to remove a tweet by ID
      var queryStr = 'DELETE FROM tweets WHERE id=(?)';
      dq.query(queryStr, params, function(err, data) {
          callback(data);
      });
    }
  }
}

// There needs to be 5 routes:
//    [X] GET - /api/posts (Retrieve all posts)
//    [X] POST - /api/posts (Create a new post)
//    [X] GET - /api/posts/:id (Retrieve a single post by its id)
//    [X] PUT - /api/posts/:id (Update a single post by its id)
//    [X] DELETE - /api/posts/:id (Delete a single post by its id)