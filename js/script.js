// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    
    $('.gallery').empty();
    var searchTerm = $("#search-term").val();
    var url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            var randomInt = Math.floor(Math.random() * response.data.length);
            $('.gallery').append("<img src='" + response.data[randomInt].images.original.url + "'/>");
        }
    });
});