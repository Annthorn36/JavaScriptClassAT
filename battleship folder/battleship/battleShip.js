var local=3;
var local =4;
var local =5;

var guess;

hit=0;
guesses=0;

isSunk=false;

while (isSunk==false) {

guess=prompt("Ready, aim, fire!(enter a number from 0-6):");
   if(guess < 0||guess > 6) {
alert("Please enter A valid number");

   } else {
       guess=guesses + 1;

if (guess == local1||guess == local2|| guess == local3) {
    hits = hits+1;
if (hits==3){

    isSunk=true;
    alert("You Sank MY Battleship")
}

}

}


var stats ="you took"+ guesses+"guesses to sink my BattleShip,"=
"which means your shooting accuracy was"+ (3/guesses);
alert(stats);
}

