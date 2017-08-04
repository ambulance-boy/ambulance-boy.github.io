(function() {
  var spreadsheetID = "1-IZ5Dp6vI1elWr7lQVuoXb8fgtQSFKc2SJ5neDyyEzk";

  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  // + "/od6/public/basic?alt=json"; // Alternate data format

  var songs = document.createElement("div");
  songs.id = "songs";
  $(document).ready(function() {
    var child = document.getElementById('container2');
    var resume = document.getElementById('resume');
    resume.appendChild(songs);

    child.style.paddingLeft = child.style.paddingRight = (child.offsetWidth - child.clientWidth)/2 + "px"; // Adjust for scrollbar
    resume.style.height = Math.max(screen.height, 900); // Compare screen height to background
  });

  $.getJSON(url, function(data) {
    $(data.feed.entry).each(function(){
      // Column names are name, age, etc.
      // $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
      var title = document.createElement("p");
      title.className += "title";
      var titleSpan = document.createElement("span");
      titleSpan.appendChild(document.createTextNode(this.gsx$title.$t));
      title.appendChild(titleSpan);

      var artist = document.createElement("p");
      artist.className += "artist";
      var artistSpan = document.createElement("span");
      artistSpan.appendChild(document.createTextNode(this.gsx$artist.$t));
      artist.appendChild(artistSpan);

      songs.appendChild(title);
      songs.appendChild(artist);
      songs.appendChild(document.createElement("br"));
    });
  });
})();
