//Constructor for Cloze Cards
var ClozeCard = function (text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(new RegExp(cloze, "gi"), "...");
    if (this.fullText.indexOf(this.cloze) === -1) {
        console.log("ERROR: '" + this.cloze + "' is not part of main text - '" + this.fullText + "'");
    }     
};

module.exports = ClozeCard;
