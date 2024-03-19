// Create web server
var express = require('express');
var app = express();
app.get('/comments', function(req, res) {
  res.send('comments');
});
app.listen(3000, function() {
  console.log('Listening on port 3000');
});

// Path: index.js
// Create web server
var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('index');
});
app.listen(3000, function() {
  console.log('Listening on port 3000');
});

// Path: posts.js
// Create web server
var express = require('express');
var app = express();
app.get('/posts', function(req, res) {
  res.send('posts');
});
app.listen(3000, function() {
  console.log('Listening on port 3000');
});

// Path: server.js
// Create web server
var express = require('express');
var app = express();
app.use('/comments', require('./comments'));
app.use('/posts', require('./posts'));
app.use('/', require('./index'));
app.listen(3000, function() {
  console.log('Listening on port 3000');
});

// Run server.js
// Open browser and go to localhost:3000
// You should see "index" in the browser
// Open browser and go to localhost:3000/comments
// You should see "comments" in the browser
// Open browser and go to localhost:3000/posts
// You should see "posts" in the browser

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

app.listen(4000, function() {
  console.log('Listening on port 4000');
});