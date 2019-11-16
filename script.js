// User clicks 'Start' to begin
    var seconds = 75
    var timer = document.querySelector("#timer");
    var startBtn = document.querySelector("#start-button");
// On click:
    // 1 - start 10 second timer
    startBtn.addEventListener("click", function() {
        var timeInterval = setInterval(function () {
            timer.textContent = "Time: " + seconds--;
            if (seconds === -1) {
                timer.textContent = "Time's Up!";
                clearInterval(timeInterval);
                console.log("time's up");
            }
        }, 1000);
    // Quiz title is removed   
        var titleDiv = document.querySelector("#start-header");
        titleDiv.remove();
        console.log("title removed");
        
        // First question appears in place of the instructions
        var startDesc = document.querySelector("#start-desc");
        startDesc.remove();
        for (i = 0; questions < i; i++) {
            var questionTitle = document.createElement("<p>");
            questionTitle.textContent = questions.title;
            console.log(questionTitle);
        }
    })
// Question
    // replace starting <p> with question
    // replace start button with 4 answer buttons
