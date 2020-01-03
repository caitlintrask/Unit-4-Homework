// User clicks 'Start' to begin
var seconds = 75
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start-button");
var startDesc = document.querySelector("#quest");
var choicesDiv1 = document.querySelector("#choices");
var index = 0;
var gameArea = document.querySelector("#gamearea");
// On click:
// 1 - start 10 second timer

startBtn.addEventListener("click", function () {
    event.preventDefault()
    var timeInterval = setInterval(function () {
        timer.textContent = "Time: " + seconds--;
        verifyTime()
    }, 1000);
    // Quiz title is removed   
    var titleDiv = document.querySelector("#start-header");
    titleDiv.remove();
    console.log("title removed");

    startBtn.remove();
    // First question appears in place of the instructions

    console.log(questions);

    // call Questions array
    function showQuestion() {
        let i = index

        console.log("start description removed");
        console.log(questions[i]);

        // Display first question
        var h3 = document.createElement("h3");

        h3.textContent = questions[i].title;

        startDesc.innerHTML = ""
        startDesc.append(h3);
        console.log(questions[i].title);

        console.log(questions[i]);
        choicesDiv1.innerHTML = ""
        for (j = 0; j < questions[i].choices.length; j++) {

            var buttonDiv = document.createElement("div");
            var button = document.createElement("button");

            var answerOutput = document.querySelector("#answer-output");
            console.log(answerOutput);
            var answerh4 = document.createElement("h4");
            var currentQuestion = 0;

            // call first set of choices
            buttonDiv.append(button);
            button.setAttribute("id", "responses" + j)
            button.setAttribute("res", questions[i].choices[j])
            button.textContent = questions[i].choices[j]
            currentQuestion++;
            choicesDiv1.append(buttonDiv);

            console.log(questions[i].choices[j]);

            document.querySelector("#responses" + j).addEventListener("click", function (event) {
                console.log(event)
                var resClicked = event.target.attributes[1].nodeValue
                console.log(resClicked)

                if (resClicked === questions[i].answer) {

                    answerh4.textContent = "Correct!";
                    console.log(answerh4);
                    console.log(answerOutput);
                    answerOutput.innerHTML = ''
                    answerOutput.append(answerh4);
                }
                else {
                    answerh4.textContent = "Incorrect!"
                    console.log(answerh4);
                    console.log(answerOutput);
                    answerOutput.innerHTML = ""
                    answerOutput.append(answerh4);
                    seconds = seconds - 15
                    timer.textContent = "Time: " + seconds;
                    verifyTime()
                }
                index++
                // verify if index is < questions.length
                if (index < questions.length) {
                    showQuestion()
                }
                else {
                    gameover()
                }

            })
        }




    }
    function verifyTime() {
        if (seconds < 0) {
            timer.textContent = "Time's Up!";
            clearInterval(timeInterval);
            console.log("time's up");
            seconds = 0
            gameover()
        }
    }
    function gameover() {
        //stop the game and show results
        gameArea.innerHTML = ""
        var total = document.querySelector("#total-score");
        var addUser = document.querySelector("#adduser");
        total.textContet = seconds;
        var resultsArea = document.querySelector("#resultsarea");
        resultsArea.style.display = "block";
        addUser.addEventListener("click", function () {
            event.preventDefault()
            // the input
            var initials = document.querySelector("#initials").value;
            document.querySelector("#initials").value = "";
            // then add to the localstorage

            // key totalscores [{user:"", score:},]
            if (initials !== "") {
                var newUser = {
                    user: initials,
                    score: seconds
                }
                var totalScores = JSON.parse(localStorage.getItem("totalScores"))
                console.log(totalScores);
                if (!totalScores) {
                    totalScores = []
                }
                totalScores.push(newUser)
                localStorage.setItem("totalScores", JSON.stringify(totalScores))
            }
        })
    }

    showQuestion()
})

