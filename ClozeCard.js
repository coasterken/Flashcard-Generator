//Constructor for Cloze Cards
var ClozeCard = function (text, cloze) {
    if (!(this instanceof ClozeCard)) {
        return new ClozeCard(text, cloze);
    }
    var pattern = cloze.replace(/[a-z0-9\s]/gi, '.');
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(new RegExp(cloze, "gi"), pattern);
    if (this.fullText.indexOf(this.cloze) === -1) {
        console.log("ERROR: '" + this.cloze + "' is not part of main text - '" + this.fullText + "'");
    }     
};

module.exports = ClozeCard;
