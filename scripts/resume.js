(function() {
  var spreadsheetID = "1-IZ5Dp6vI1elWr7lQVuoXb8fgtQSFKc2SJ5neDyyEzk";

  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  // + "/od6/public/basic?alt=json"; // Alternate data format

  $.getJSON(url, function(data) {
    var resume = document.createElement("div");
    resume.id = "resume";

    $(data.feed.entry).each(function(){
      // Column names are name, age, etc.
      // $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
      var title = document.createElement("p");
      title.className += "MsoBodyText";

      var titleSpan = document.createElement("span");
      titleSpan.appendChild(document.createTextNode(this.gsx$title.$t));
      title.appendChild(titleSpan);

      var artist = document.createElement("p");
      artist.className += "MsoBodyText";
      var artistSpan = document.createElement("span");

      artistSpan.style.fontSize = "10pt";
      artistSpan.appendChild(document.createTextNode(this.gsx$artist.$t));
      artist.appendChild(artistSpan);

      resume.appendChild(title);
      resume.appendChild(artist);
      resume.appendChild(document.createElement("br"));
    });

    $( document ).ready(function() {
      var parent = document.getElementById('container1');
      var child = document.getElementById('container2');
      child.appendChild(resume);

      child.style.paddingRight = child.offsetWidth - child.clientWidth + "px"; // Adjust for scrollbar
    });
  });
})();
