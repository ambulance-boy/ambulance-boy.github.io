(function() {
  var spreadsheetID = "1-IZ5Dp6vI1elWr7lQVuoXb8fgtQSFKc2SJ5neDyyEzk";

  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  // + "/od6/public/basic?alt=json"; // Alternate data format

  var songs = document.createElement("div");
  $( document ).ready(function() {
    // var parent = document.getElementById('container1');
    var child = document.getElementById('container2');
    var resume = document.getElementById('resume');
    resume.appendChild(songs);

    child.style.paddingRight = (child.offsetWidth - child.clientWidth)/2 + "px"; // Adjust for scrollbar
    child.style.paddingLeft = (child.offsetWidth - child.clientWidth)/2 + "px"; // Adjust for scrollbar
  });

  $.getJSON(url, function(data) {
    $(data.feed.entry).each(function(){
      // Column names are name, age, etc.
      // $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
      var title = document.createElement("p");
      title.className += "MsoBodyText";

      var titleSpan = document.createElement("span");
      titleSpan.style.fontSize = "14pt";
      titleSpan.appendChild(document.createTextNode(this.gsx$title.$t));
      title.appendChild(titleSpan);

      var artist = document.createElement("p");
      artist.className += "MsoBodyText";
      var artistSpan = document.createElement("span");
      artistSpan.appendChild(document.createTextNode(this.gsx$artist.$t));
      artist.appendChild(artistSpan);

      songs.appendChild(title);
      songs.appendChild(artist);
      songs.appendChild(document.createElement("br"));
    });
  });
})();
