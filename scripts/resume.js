var data = [


    {
        "title": "All for Lena",
        "author": "Billy Joel"
    },

    {
        "title": "Anything Could Happen",
        "author": "Ellie Goulding"
    },

    {
        "title": "Bat Out of Hell",
        "author": "Meatloaf"
    },

    {
        "title": "Bennie and the Jets",
        "author": "Elton John"
    },

    {
        "title": "Cherokee",
        "author": "Europe"
    },

    {
        "title": "Dead Ringer for Love",
        "author": "Meatloaf"
    },

    {
        "title": "Died in Your Arms",
        "author": "Cutting Crew"
    },

    {
        "title": "Everything Louder Than Everything Else",
        "author": "Meatloaf"
    },

    {
        "title": "Final Countdown",
        "author": "Europe"
    },

    {
        "title": "Grimsby",
        "author": "Elton John"
    },

    {
        "title": "Grow Some Funk of Your Own",
        "author": "Elton John"
    },


    {
        "title": "Hall of Fame",
        "author": "The Script"
    },

    {
        "title": "I’m Gonna Love Her for Both of Us",
        "author": "Meatloaf"
    },

    {
        "title": "Island Girl",
        "author": "Elton John"
    },

    {
        "title": "Open Your Heart",
        "author": "Europe"
    },

    {
        "title": "Open the Eyes of My Heart",
        "author": "Michael W. Smith"
    },

    {
        "title": "Out of the Frying Pan and into the Fire",
        "author": "Meatloaf"
    },

    {
        "title": "Our God",
        "author": "Chris Tomlin"
    },

    {
        "title": "Pressure",
        "author": "Billy Joel"
    },

    {
        "title": "Roberta",
        "author": "Billy Joel"
    },


    {
        "title": "Rocket Man",
        "author": "Elton John"
    },


    {
        "title": "Sky Full of Stars",
        "author": "Cold Play"
    },


    {
        "title": "Someone Saved My Life Tonight",
        "author": "Elton John"
    },

    {
        "title": "Stop in Nevada",
        "author": "Billy Joel"
    },

    {
        "title": "Superheroes",
        "author": "The Script"
    },

    {
        "title": "The Night Is Still Young",
        "author": "Billy Joel"
    },

    {
        "title": "This Is Amazing Grace",
        "author": "Phil Wickham"
    },

    {
        "title": "Took the Words Right Out of My Mouth",
        "author": "Meatloaf"
    },

    {
        "title": "Yellow Brick Road",
        "author": "Elton John"
    },

    {
        "title": "You're So Static",
        "author": "Elton John"
    }

];

var resume = document.getElementById("resume");

// For loop
data.forEach(function(song) {
    var title = document.createElement("p");
    var author = document.createElement("p");
    title.className += "MsoBodyText";
    author.className += "MsoBodyText";

    var titleSpan = document.createElement("span");
    titleSpan.appendChild(document.createTextNode(song.title));
    title.appendChild(titleSpan);

    var authorSpan = document.createElement("span");
    authorSpan.style.fontSize = "10pt";
    authorSpan.appendChild(document.createTextNode(song.author));
    author.appendChild(authorSpan);

    resume.appendChild(document.createElement("br"));
    resume.appendChild(title);
    resume.appendChild(author);
});

