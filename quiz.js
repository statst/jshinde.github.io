let questions = [
	{
		question: ' What does HTML stand for?',
		choice1: 'Hyper tool Markup Language',
		choice2: 'Hyper text Markup Language',
		choice3: 'Hyper link Manipulation Language',
		choice4: 'Hyper text Manipulation Language',
		ans: '2',
	},
	{
		question:
			'A set of characters that indicates start and end of HTML element is called?',
		choice1: 'HTML',
		choice2: 'HTML tag',
		choice3: 'Header tag',
		choice4: 'Html element',
		ans: '4',
	},
];

//set efault question index to zero
let currentQuestion = 0;
let container = document.getElementById('quiz');
let question = document.getElementById('question');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
let nextButton = document.getElementById('nextButton');
var result = document.getElementById('result');
//select a quiz button
const startQuiz = document.querySelector('.start_quiz');
//add event listener
const quiz = document.querySelector('.quiz');

//create a function to display questions

function getQuestion(qIndex) {
	let ques = questions[qIndex];
	question.innerText = ques.question;
	choice1.innerText = ques.choice1;
	choice2.innerText = ques.choice2;
	choice3.innerText = ques.choice3;
	choice4.innerText = ques.choice4;
}
//set default score to zero
let score = 0;
//create function to get nextQuestion
function getNextQuestion() {
	//select radio button
	let selectedOption = document.querySelector('input[type=radio]:checked');
	//define
	let ans = selectedOption.value;
	if (questions[currentQuestion].ans === ans) {
		score += 5;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if (questions[0] == questions.length - 1) {
		nextButton.innerText = 'Done';
	}
	if (currentQuestion === questions.length) {
		container.style.display = 'none';
		result.style.display = 'block';
		result.textContent = 'Your Score: ' + score;
		console.log(result.textContent);
		return;
	}
	getQuestion(currentQuestion);
}
getQuestion(currentQuestion);
//set-timer
let seconds = 0;
function timeLapse() {
	seconds += 1;
    document.getElementById('time').innerText = seconds.toString();
}

setInterval(timeLapse, 1000);
