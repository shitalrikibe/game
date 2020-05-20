
//first dice chenging..
var randomNumber1 =Math.floor((Math.random())*6)+1; // numbers 1-6

var randomDiceImage="dice"+randomNumber1+ ".png";//dice1 - dice6 images

//var randomImgSource="images/"+randomDiceImage;// images/dice1-6.

var image1=document.querySelectorAll("img")[0]; //.setAttribute("src", "images/dice4.png" );
image1.setAttribute("src", randomDiceImage);


//second dice chenging....
var randomNumber2 = Math.floor((Math.random())*6)+1;

//var randomDiceImage2="dice"+randomNumber2+".png";

var randomImgSource2="dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);


// if palyer 1 wins
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins!";
}
else {
  document.querySelector("h1").innerHTML="Drow!";
}

//after click on button calling to function
function refreshPage(){
    window.location.reload();
}
