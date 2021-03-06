// QUESTIONS with answers that I am using 
var questions = [
    {
        "question": "WHAT DOES ESCAPISM MEAN TO YOU?",
        "answer1": "Diving Into Local Culture",
        "answer1Total": "3",
        "answer2": "Adventure",
        "answer2Total": "1"
    },
    {
        "question": "WHAT DO YOU VALUE MOST IN YOUR ESCAPES?",
        "answer1": "Connecting With Nature",
        "answer1Total": "1",
        "answer2": "Buzz Of The City",
        "answer2Total": "3"
    },
    {
        "question": "WHICH ACTIVITY WOULD BE YOUR TOP CHOICE?",
        "answer1": "Exploring The Countryside",
        "answer1Total": "1",
        "answer2": "Wine Tasting",
        "answer2Total": "3"
    },
    {
        "question": "WHERE WOULD YOU ESCAPE TO?",
        "answer1": "Itay",
        "answer1Total": "3",
        "answer2": "Norway",
        "answer2Total": "1"
    },
    {
        "question": "What do you look for in a destination?",
        "answer1": "Avesome photo opportunities",
        "answer1Total": "1",
        "answer2": "City Vibes",
        "answer2Total": "3"
    },
    {
        "question": "What do you look for in a hostel?",
        "answer1": "located in a quiet, local area",
        "answer1Total": "1",
        "answer2": "Located near clubs and bars",
        "answer2Total": "3"
    },
    {
        "question": "Why do you travel?",
        "answer1": "To eat food around the World",
        "answer1Total": "3",
        "answer2": "To Find Myself",
        "answer2Total": "1"
    }
];

//Counter and question identifier
var currentQuestion = 0;
var score = [];
var totalQuestions = questions.length;
var maxScore = 0;

//variables which gives easy accessability to html elements by using querySelector
var questionEl = document.querySelector('.question');
var answer1 = document.querySelector('.option1');
var answer2 = document.querySelector('.option2');
var nextButton = document.querySelector('.next');
var previousButton = document.querySelector('.previous');

//Function to generate question on screen
function generateQuestions(questionNumber) {
    //function to hide and show previous button when first question is generated
    if (questionNumber === 0) {
        previousButton.style.visibility = 'hidden';
    }else{
        previousButton.style.visibility = 'visible';
    }
    //generates new question
    var question = questions[questionNumber];
    var answer1Point = questions[questionNumber].answer1Total;
    var answer2Point = questions[questionNumber].answer2Total;

    //Populates html elements, generates questions in array
    questionEl.innerHTML = `${questionNumber + 1}. ${question.question}`;
    answer1.setAttribute('data-total', `${answer1Point}`);
    answer2.setAttribute('data-total', `${answer2Point}`);
    answer1.innerHTML = `${question.answer1}`;
    answer2.innerHTML = `${question.answer2}`;
}

// This generate when the quiz page is loaded
generateQuestions(currentQuestion);

//eventlistener when next button is clicked
nextButton.addEventListener('click', function () {
    console.log('next');
    //checks clicked radio button
    var selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if (!selectedOption) {
        alert('Please select your answer!');
        return;
    }

    //Get value of selected radio
    var answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    //Add the answer score to the score array
    score.push(answerScore);

    //Adds score to total score
    maxScore += answerScore;

    //to incement the current question number
    currentQuestion++;

    //once finished clear checked
    selectedOption.checked = false;

    //checks if quiz is on the final question
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If quiz is finished then results will be showen
    if (currentQuestion == totalQuestions) {
        //Adding MaxScore to localstorage
        localStorage.setItem("scoreStorage", maxScore);
        return window.location.assign("result.html");
    }
    // function to generate next question
    generateQuestions(currentQuestion);
});

//eventlistener when previous button is clicked 
previousButton.addEventListener('click', function () {
    //Decrement question with one
    currentQuestion--;
    //removes last array value
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
});