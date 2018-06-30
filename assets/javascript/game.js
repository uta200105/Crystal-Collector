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
document.getElementById("computersTotal").innerHTML = [Math.floor(Math.random() * 120) + 19];

// Crystal Button's Math
var math1 = [Math.floor(Math.random() * 12) + 1];
var math2 = [Math.floor(Math.random() * 12) + 1];
var math3 = [Math.floor(Math.random() * 12) + 1];
var math4 = [Math.floor(Math.random() * 12) + 1];
var randomPoodle = parseInt(math1);
var randomRabbit = parseInt(math2);
var randomDog = parseInt(math3);
var randomCat = parseInt(math4);
var yourScore = 0;

// Random Individual Crystal Values
// Adding Crystal Values using button Function

$("#poodleButton").on("click", function() {
    yourScore += randomPoodle;
    $("#yourTotal").html(yourScore);
}); 
$("#rabbitButton").on("click", function() {
    yourScore += randomRabbit;
    $("#yourTotal").html(yourScore);
});
$("#dogButton").on("click", function() {
    yourScore += randomCat;
    $("#yourTotal").html(yourScore);
});
$("#catButton").on("click", function() {
    yourScore += randomDog;
    $("#yourTotal").html(yourScore);
});

// End of Game Reaction

if (yourScore > ComputersTotal) {
    alert = "Sorry, let's try again";
} else if (yourScore = computersTotal) {
    alert = "You Win!";
}


// Reset