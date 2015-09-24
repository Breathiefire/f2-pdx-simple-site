module.exports = function() {

  var course = {
    level: 201,
    name: 'Foundations 2: JavaScript',
    labs: [
      { "topic": "Basics" },
      { "topic": "Object Oriented Programming"},
      { "topic": "Project"}
    ]
  };
  return course.labs;
};
