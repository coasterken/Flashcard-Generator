//main file for processing cards

var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var inputType = process.argv[2];
var inputFrontMsg = process.argv[3];
var inputBackCloze = process.argv[4];

if (!inputType && !inputFrontMsg && !inputBackCloze) {
    console.log("Input as: node argv basic 'front msg' 'back msg' or node argv cloze 'full text' 'cloze'" );
    return;
}

switch (inputType.toLowerCase()) {
    case "basic":
        processBasic();
        break;
    case "cloze":
        processCloze();
        break;
    default:
        console.log ("That was a bad flash card type!")
        break;
}

function processBasic() {
    var frontBackCard = new BasicCard(
        inputFrontMsg, inputBackCloze);

    console.log("------- Basic Card ------------");
    
    // Front Card
    console.log("Front Card: " + frontBackCard.front);

    // Back Card
    console.log("Back Card: " + frontBackCard.back);
}

function processCloze() {

    console.log("------- Cloze Card ------------");
    
    var clozeCard = new ClozeCard(
        inputFrontMsg, inputBackCloze);

    // "George Washington"
    console.log("Cloze: " + clozeCard.cloze);

    // " ... was the first president of the United States.
    console.log("Partial: " + clozeCard.partial);

    // "George Washington was the first president of the United States.
    console.log("Full Text: " + clozeCard.fullText);
}
