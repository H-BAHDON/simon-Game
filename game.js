    buttonColours = ["red", "blue", "green", "yellow"];
    gamePattern = [];
    userClickedPattern = [];

    let level = 0;
    let started = false;

    function nextSequence() {
      level++;
      let randomNumber = Math.random();
      randomNumber = Math.floor(randomNumber * 4);
      let randomChosenColor = buttonColours[randomNumber];
      gamePattern.push(randomChosenColor);
      playSound(randomChosenColor);
      animatePress(randomNumber);
    }

    function playSound(name) {
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
    }


    $(".btn").on("click", function(){
      var userChosenColour = $(this).attr("id");
      userClickedPattern.push(userChosenColour);
      playSound(userChosenColour);
      $(this).fadeIn(100).fadeOut(100).fadeIn(100);
      console.log(userClickedPattern);
      animatePress(userChosenColour);
    })


    function animatePress(currentColor){
      $("#" + currentColor).addClass("pressed");
      setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
      }, 100)
    }



    $(document).on("keypress", () =>{
      if(!started){
          $("#level-title").text("level " + level++);
          nextSequence();
          started = true;
      }
    })

    function checkAnswer(currentlevel){
      
    }








// this.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    //the end of the js file
