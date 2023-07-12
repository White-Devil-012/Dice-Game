var p1=prompt("Enter player 1 name:");
var p2=prompt("Enter player 2 name:");

// Dice 1
var randomNumber1=Math.floor((Math.random()*6)+1);
var randomDice1="dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDice1);

// Dice 2
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomDice2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(randomNumber1==randomNumber2)
document.querySelector("h1").innerHTML="Draw !";

else if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML=p1+" wins🏆";

else
document.querySelector("h1").innerHTML=p2+" wins🏆";