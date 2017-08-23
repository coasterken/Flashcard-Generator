//main file for processing cards - with prompts

var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require('inquirer');

var inputType = "";
var inputFrontMsg = "";
var inputBackCloze = "";

function createFlashCards() {

    inquirer.prompt([{
            type: 'list',
            message: 'Select a Flashcard Type',
            name: 'cardType',
            choices: ["basic", "cloze"]
        }

    ]).then(function (answers) {
        switch (answers.cardType) {
            case "basic":
                inquirer.prompt([{
                        type: 'input',
                        message: 'Enter Front Card Text: ',
                        name: 'frontCard',
                        validate: function (value) {
                            if (value) {
                                return true;
                            }
                            return 'Please enter text for the front card.';
                        }
                    },
                    {
                        type: 'input',
                        message: 'Enter Back Card Text:  ',
                        name: 'backCard',
                        validate: function (value) {
                            if (value) {
                                return true;
                            }
                            return 'Please enter text for the back card.';
                        }
                    }
                ]).then(function (answers) {
                    inputFrontMsg = answers.frontCard;
                    inputBackCloze = answers.backCard;
                    processBasic();
                });
                break;
            case "cloze":
                inquirer.prompt([{
                        type: 'input',
                        message: 'Enter Full Message: ',
                        name: 'clozeMsg',
                        validate: function (value) {
                            if (value) {
                                return true;
                            }
                            return 'Please enter a message.';
                        }
                    },
                    {
                        type: 'input',
                        message: 'Enter Cloze:        ',
                        name: 'cloze',
                        validate: function (value) {
                            if (value) {
                                return true;
                            }
                            return 'Please enter a cloze.';
                        }
                    }
                ]).then(function (answers) {
                    inputFrontMsg = answers.clozeMsg;
                    inputBackCloze = answers.cloze;
                    processCloze();
                });
                break;
            default:
                console.log("That was a bad flash card type!")
                break;
        }
    });
}

function processBasic() {
    var frontBackCard = new BasicCard(
        inputFrontMsg, inputBackCloze);

    console.log("------- Basic Card ------------");

    // Front Card
    console.log("Front Card: " + frontBackCard.front);

    // Back Card
    console.log("Back Card:  " + frontBackCard.back);
    goAgain();
}

function processCloze() {

    console.log("------- Cloze Card ------------");

    var clozeCard = new ClozeCard(
        inputFrontMsg, inputBackCloze);

    // "George Washington"
    console.log("Cloze:     " + clozeCard.cloze);

    // " ... was the first president of the United States.
    console.log("Partial:   " + clozeCard.partial);

    // "George Washington was the first president of the United States.
    console.log("Full Text: " + clozeCard.fullText);
    goAgain();
}

function goAgain() {

    inquirer.prompt([{
            type: 'confirm',
            message: 'Create Another Card?',
            name: 'confirm',
        }
    ]).then(function (answers) {
        if (answers.confirm) {
            createFlashCards();
        }
    });
};
createFlashCards();