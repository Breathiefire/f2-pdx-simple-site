var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/app/'));

var f2search = require("./lib/f2search");

var lectures = require("./lib/lectures_only");

var labs = require("./lib/labs_only");

app.post('/search', function (req, res) {
  var searchResults = f2search(req.body.searchText, req.body.lucky);
  res.json(searchResults);
});

app.get('/course_name', function (req, res) {
  res.json(course.name);
});

app.get('/lectures', function (req, res) {
  var lectureResults = lectures(req.body.lectures);
  res.json(lectureResults);
});

app.get('/labs', function (req, res) {
  var labResults = labs(req.body.labs);
  res.json(labResults);
});

app.get('/', function (req, res) {
  res.sendFile();
});

app.listen(port, function () {
  console.log('server started on port ' + port);
});
