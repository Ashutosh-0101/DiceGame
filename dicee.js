var randomn01 = Math.floor(Math.random() * 6) + 1;
var randomDiceeImage = "images/dice" + randomn01 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceeImage);
var randomn02 = Math.floor(Math.random() * 6) + 1;
var randomDiceeImage = "images/dice" + randomn02 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceeImage);
var h = document.querySelector("h1")
if (randomn01 > randomn02) {
    //    var h= document.querySelector("h1")
    h.textContent = "🚩Player 1 wins";
}
else if (randomn01 === randomn02) {
    h.textContent = "🚩Tie🚩";
}
else if (randomn01 < randomn02) {
    h.textContent = "Player 2 wins🚩";

}