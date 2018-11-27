var questions = [
    {
        q: "Which one is the best hamburger?",
        a: ["In n Out", "Five Guys", "Jack in the box", "KFC"],
        correct: "Five Guys"
    },

    {
        q: "Which city is the best city in California?",
        a: ["LA", "Santa Barbara", "San Francisco", "Irvine"],
        correct: "San Francisco"
    },
    
    {
        q: "Which video game below is the most addictive game?",
        a: ["Overwatch", "BattleField", "LOL", "CS:GO"],
        correct: "Overwatch"
    },

    {
        q: "Which movie below is the most watched movie?",
        a: ["Titanic", "The Lion King", "Superman", "Batman"],
        correct: "Titanic"
    }

    {
        q: "What age is the best age to start MMA?",
        a: ["10", "15", "20", "30"],
        correct: "10"
    }

]

var labels = ["first", "second", "third", "last"];

var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}

var countdown = function {
    var timer = setInterval(function() {
        seconds = seconds -1;
        $("time-remain").html(seconds);

        if (seconds <=0) {
            $(".container").fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;

            for (var i = 0; i < 5; i++) {
                if ($(questions[i].correct) {
                    correctAnswers ++;
                } else {
                    wrongAnswers++;
                };

            };
        };
    };
}

