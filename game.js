    var buttonColours = ["red", "blue", "green", "yellow"];

    var userClickedPattern = [];

    var gamePattern = []

    function nextSequence() {
      var randomNumber = Math.floor(Math.random() * 4);
      var randomChosenColor = buttonColours[randomNumber];
      $()
      gamePattern.push(randomChosenColor);
      playSound(randomChosenColor);
    }

    function playSound(name) {
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
    }


    $(".btn").on("click", function() {
      var userChosenColour = $(this).attr("id");
      userClickedPattern.push(userChosenColour)
      playSound(userChosenColour);
      $(this).fadeIn(100).fadeOut(100).fadeIn(100);
      console.log(userClickedPattern);
      animate(userChosenColour);
    });


    function animate(currentColor) {
      $("#" + currentColor).addClass("pressed");
      setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
      }, 100)
    };









    //this is the end of the Java-script
