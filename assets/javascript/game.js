$(document).ready(function()
{
    // Instructions
$("#instructions").hover(function()
{
$("p").prepend("You will be given a randorm number at the beginning of the game. There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score. You win the game by matching your total score to the random number. You lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it. Each time the game starts, the game will change the values of each crystal.");
},
function()
{
$("p").html('');
})
});

// Computer's Random Total resets at refresh for now
//document.getElementById("computersTotal").innerHTML = [Math.floor(Math.random() * 120) + 19];


// Crystal Button's Math
var math1;
var math2;
var math3;
var math4;
var randomPoodle;
var randomRabbit;
var randomDog;
var randomCat;
var yourTotal;
var yourScore = 0;
var computersTotal;

startgame();

function startgame()
{
    yourTotal = 0;
    computersTotal = (Math.floor(Math.random() * 120) + 19);
     math1 = [Math.floor(Math.random() * 12) + 1];
     math2 = [Math.floor(Math.random() * 12) + 1];
     math3 = [Math.floor(Math.random() * 12) + 1];
     math4 = [Math.floor(Math.random() * 12) + 1];
     randomPoodle = parseInt(math1);
     randomRabbit = parseInt(math2);
     randomDog = parseInt(math3);
     randomCat = parseInt(math4);
     $("#computersTotal").text(computersTotal);
     $("#yourTotal").text(yourTotal);

}

function check()
{
    if (yourTotal == computersTotal) {
        alert("You Win!");
       yourScore++
       $("#score").text(yourScore);
       startgame();

        
    } 
    else if (yourTotal > computersTotal) {
        alert("Sorry, let's try again");
        yourScore--
       $("#score").text(yourScore);
       startgame();
    }
}


// Random Individual Crystal Values
$("#poodleButton").on("click", function() {
    yourTotal += randomPoodle;
    $("#yourTotal").html(yourTotal);
    check();
}); 
$("#rabbitButton").on("click", function() {
    yourTotal += randomRabbit;
    $("#yourTotal").html(yourTotal);
    check();
});
$("#dogButton").on("click", function() {
    yourTotal += randomCat;
    $("#yourTotal").html(yourTotal);
    check();
});
$("#catButton").on("click", function() {
    yourTotal += randomDog;
    $("#yourTotal").html(yourTotal);
    check();
});

