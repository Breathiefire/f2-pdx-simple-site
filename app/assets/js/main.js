
$(function(){

    $("button").click(function(evt) {
      var whichButton = $(this).attr('id');
      console.log(whichButton);

      if (whichButton === "Lectures"){

      $.get("http://localhost:3000/lectures", function (response) {
          $('div#showLectures ul').append('<li>' + response + '</li>');
        });

      } else {

        $.get("http://localhost:3000/labs", function (response) {
          $('div#showLabs ul').append('<li>' + response + '</li>');
        });
      }
    });

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
