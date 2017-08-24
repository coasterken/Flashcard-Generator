//main file for processing cards

//******************************************** */
//****Did not use NEW keyword here to test scope-safe constructor  */
//******************************************** */

var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

console.log("------- Basic Card ------------");

var firstPresident = BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log("Front Card: " + firstPresident.front);

// "George Washington"
console.log("Back Card: " + firstPresident.back);

console.log("------- Cloze Card ------------");

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log("Cloze: " + firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log("Partial: " + firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log("Full Text: " + firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

//Testing stuff
// cloze = "George Washington";
// text =
//     "George Washington was the first president of the United States.";
// var reg = new RegExp(cloze, "gi")
// res = text.replace(new RegExp(cloze, "gi"), "...");
// console.log("test: " + res);