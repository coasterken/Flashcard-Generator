// Constructor for Basic Cards
var BasicCard = function (front, back) {
    if (!(this instanceof BasicCard)) {
        return new BasicCard(front, back);
    }
    this.front = front;
    this.back = back;
};

module.exports = BasicCard;