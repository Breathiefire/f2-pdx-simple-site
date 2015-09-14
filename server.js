var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app"));

app.get("/", function (req, res){
 res.sendFile();
});

var course =

{
  "level":"201",
  "name":"Foundations 2",
 "lectures":
  [
    {"class": "1","topic":"Paperwork & JS Basics 1"},
    {"class": "2","topic":"Javascript Basics & Intro to Node"},
    {"class": "3","topic":"Array Methods, Functions, & Scope Hoisting"},
    {"class": "4","topic":"OOP in Javascript & Classes/Inheritence"},
    {"class": "5","topic":"JS in the Browser & Intro to JQuery"},
    {"class": "6","topic":"Building a Server & Using Ajax"},
    {"class": "7","topic":"Build & Deploy an App"},
    {"class": "8","topic":"Functional Programming with Lodash"}
  ],

  "labs":
  [
    {"lab": "1","topic":"Lab 1 - Zoo lab"},
    {"lab": "2","topic":"Lab 2 - Blob lab"},
    {"lab": "3","topic":"Lab 3 - Last lab"}
  ]
}

 app.get("/lectures", function (req, res){
   var randomIndex = Math.floor(Math.random()*course.lectures.length);
   console.log(course.lectures[randomIndex].topic);
   res.send(course.lectures[randomIndex].topic);
   res.json(course.lectures[randomIndex].topic); //over weekend
 });

 app.get("/labs", function (req, res){
   var randomIndex = Math.floor(Math.random()*course.labs.length);
   console.log(course.labs[randomIndex].topic);
   res.send(course.labs[randomIndex].topic);
   res.json(course.labs[randomIndex].topic); //over weekend
 });

app.listen(port, function(){
  console.log("server starting. available at http://localhost: " + port);
});
