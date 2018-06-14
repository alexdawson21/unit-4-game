
var wins;
var losses;
var number;
var score = 0;
var numberPrint;
var scorePrint;
var winsPrint;
var lossesPrint;
var red;
var blue;
var green;
var purple;

function win() {
    wins = 0;
    winsPrint = "<p>Wins:<br>" + wins;
    $("#wins").html(winsPrint);
    
}
win();

function lose() {
    losses = 0;
    lossesPrint = "<p>Losses:<br>" + losses;
    $("#losses").html(lossesPrint);
    
    
}
lose();


function gameStart(){
function scoreset() {
        score = 0;
        scorePrint = "<p>Your Score is:<br>" + score;
        $("#score").html(scorePrint);
    }
scoreset();


function numberset() {
    number = Math.floor(Math.random()*(41-25+1)+25);
    numberPrint = "<p>Your number is:<br>" + number;
    $("#number").html(numberPrint);
}
numberset();

function values() {
    $("#red").attr("data-value",Math.floor(Math.random()*(7-3+1))+3);
    $("#blue").attr("data-value",Math.floor(Math.random()*(7-3+1))+3);
    $("#purple").attr("data-value",Math.floor(Math.random()*(7-3+1))+3);
    $("#green").attr("data-value",Math.floor(Math.random()*(7-3+1))+3);
}
values();

function onClickOfAnyCrystal(thatCrystal){
    var dv = thatCrystal.attr("data-value");
    dv = parseInt(dv);
    score = score + dv;
    scorePrint = "<p>Your Score is:<br>" + score;
    $("#score").html(scorePrint);
    if (score > number) {
        losses++;
        lossesPrint = "<p>Losses:<br>" + losses;
    $("#losses").html(lossesPrint);
    scoreset();
    numberset();
    values();
    }
    if (score === number) {
        wins++;
        winsPrint = "<p>Wins:<br>" + wins;
    $("#wins").html(winsPrint);
    scoreset();
    numberset();
    values();
    }
    console.log(score);

}


$("#red").on("click", function () {
    onClickOfAnyCrystal( $("#red") );
})
$("#blue").on("click", function () {
    onClickOfAnyCrystal( $("#blue") );
})
$("#green").on("click", function () {
  onClickOfAnyCrystal( $("#green") );
    
})
$("#purple").on("click", function () {
    onClickOfAnyCrystal( $("#purple") );
    
})
}
gameStart();