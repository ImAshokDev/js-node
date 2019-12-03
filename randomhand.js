// An application that displays a random 5-card poker hand

var deck = [];
'♠♡♢♣'.split('').forEach(function(suit) {
  'A 2 3 4 5 6 7 8 9 10 J Q K'.split(' ').forEach(function(rank) {
    deck.push(rank + suit);
  });
});

var hand = [];
for (var i = 0; i < 5; i += 1) {
  hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}

console.log(hand.join(' '));
