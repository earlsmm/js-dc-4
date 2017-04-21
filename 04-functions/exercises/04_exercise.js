var suits = ['clubs', 'spades', 'hearts', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*


Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
shoulkd be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/




/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/




/*

Write a function called dealHand that takes a number as it's only
parameter. This number represents the number of cards that dealHand
should return.

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/

var rankScores = {
  ace: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  king: 12,
  queen: 13
}

/*
Create a `constructor` (A function that returns an object) for a card. Each card should have a suit, rank and score as well as a title. The title should be a string descriptor for the card, like 'Ace of Hearts' or 'Four of Clubs'
Test out your constructor by creating a new card, `console.log`ing it to make sure you're getting what you expect. You should get something like:
{
  suit: 'hearts',
  rank: 'ace',
  title: 'ace of hearts',
  score: 1
}

Create two variables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/

//function Card (suit, rank) {
//  this.suit = suit
//  this.rank = rank
//  this.title = rank + ' of ' + suit
//  this.score = rankScores[rank]
//}
//
//var fiveOfHearts = new Card(suits[0], ranks[4])
//    console.log(fiveOfHearts)

/*
<<<<<<< HEAD
Write a constructor function for a deck of cards. The deck should contain a property `cards` that is an array of the cards in the current deck.
Your deck should contain a method called `createNewDeck` that will populate the `cards` array with all 52 card posibilities, using your card object from above. Someone should not be able to create a new deck of 52 cards if the deck's `cards` array already has cards in it
*/

function Deck(){
  this.createNewDeck = function() {
    var deck = []
    for (var i = 0; i < suits.length; i++) {
      for (var d = 0; d < ranks.length; d++) {
        deck.push( new Card(suits[i], ranks[d]))
      }
    }
    return deck
  }

  this.cards = this.createNewDeck()

  this.dealHand = function(length) {
    if (this.cards.length === 0) {
        this.cards = this.createNewDeck()
    }
    var handLength = length || 1
    if (handLength === 1){
        return this.cards[Math.random() * this.cards.length]
    } else {
      var hand = []
      for (var i = 0; i < handLength; i++) {
        var card = this.cards.splice(Math.random() * this.cards.length, 1)
        hand.push(card)
      }
      return hand
    }
  }
}

//var testDeck = new Deck()
//testDeck.createNewDeck()
    console.log(Deck)
