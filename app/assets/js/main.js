$(function () {

  $('button').one('click', function () {
    var section = $(this).attr('id');

    $.get('http://localhost:3000/' + section, function(response) {
        for(var i = 0; i < response.length; i++){
           $("#show-" + section).append('<ul>' + response[i].topic + '</>');
        }

      });
    });

  $('#search').on('submit', function(e) {
    // TODO: Prevent the form from submitting the default way.
    e.preventDefault();

    var searchText = $('input[name=searchText]').val();

    var lucky = $('input[name=lucky]').is(':checked');

    var data = {searchText: searchText, lucky: lucky};

    var url = 'http://localhost:3000/search';

    console.log(data); // this will be a sanity check to see that we're getting the data
    $.post(url, data, function(response) {
      var lectures,
          output = '';

      if (response.notes && response.notes.constructor === Array) {

        for (var i = 0; i < response.notes.length; i++) {
          output += '<li>' + response.notes[i] + '</li>';
        }
      }
      if (searchText === '') {
        alert('Please enter a word or words separated by commas');
        return false;
    }

      if (output === '') {
        output = '<ul>' + "No results found" + '</ul>';

    }
      $('#search-results').html(output);

    });
  });

});
