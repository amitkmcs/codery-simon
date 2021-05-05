
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];




var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


function nextSequence(){

  userClickedPattern = [];

  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);


  var randomNumber=Math.floor(Math.random()*4);

 var randomChosenColour=buttonColours[randomNumber];
 gamePattern.push(randomChosenColour);
 console.log(gamePattern);
}





// for yellow button
$("#yellow").on("click",function(){
  $("#yellow").fadeOut(100).fadeIn(100);
});

$("#yellow").on("click", function() {
  var audio = $("#yellow-audio")[0];
  audio.play();
});

// for red button..
$("#red").on("click",function(){
  $("#red").fadeOut(100).fadeIn(100);
});

$("#red").on("click", function() {
  var audio = $("#red-audio")[0];
  audio.play();
});

// for green button
$("#green").on("click",function(){
  $("#green").fadeOut(100).fadeIn(100);
});
$("#green").on("click",function(){
  var green= $("#green-audio")[0];
  green.play();
});

// for blue button..
$("#blue").on("click",function(){
  $("#blue").fadeOut(100).fadeIn(100);
});

$("#blue").on("click",function(){
  var blue=$("#blue-audio")[0];
  blue.play();
});

$(".btn").on("click",function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);

   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
});



function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");

    }

}



function animatePress(currentColor){
    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer(){

}
