var suits = ['clubs', 'spades', 'hearts', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*
Card Scores: ace: 1, two: 2, three: 3, four: 4, ... jack: 11, king: 12, queen: 13
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
