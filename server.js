var express = require('express');
var app = express();

// add route "root"
app.get('/', function(req, res) {
  res.send('I\'m root!');
});

// add route "name"
app.get('/name', function(req, res) {
  res.send('Stephanie Zeng');
});

// add route "friends"
app.get('/friends', function(req, res) {
  res.send(['Tracy', 'Indika', 'Linda']);
});

// add route "fav film"
app.get('/favorite-film', function(req, res) {
  res.send({
    name: 'Iron Man',
    year: 2008,
    storyline: "Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters.",
    genres: ['Action', 'Adventure', 'Sci-Fi'],
  });
});
// app listening on port 5000
app.listen(5000, function() {
  console.log('At your service. Listening on port 5000!');
});
