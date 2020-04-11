//create questions variable;
const htmlQuestions = [
	[
		'Q.1 What does HTML stand for?',
		'Hyper tool Markup Language',
		'Hyper text Markup Language',
		'Hyper link Manipulation Language',
		'Hyper text Manipulation Language',
		'b',
	],
	[
		'Q.2 A set of characters that indicates start and end of HTML element is called?',
		'HTML',
		'HTML tag',
		'Header tag',
		'Html element',
		'd',
	],
	[
		'Q.3 Raw text, images and other elements included in a web page',
		'HTML tag',
		'Website content',
		'Website structure',
		'HTML element',
	],
	[ 	'Q.4 A rule describing how to format a particular portion of a web page is called?', 
		'Style',
		'tag',
		'Header',
     	'HTML',
		 'a'],
	[ 	'Q.5 What is the correct HTML for adding a background color of yellow?',
		'background-color: yellow',
		'background-color: #FFFF00',
		'a and b',
		'None of the above',
		'c']
	 

];

//select a quiz button 
const html= document.querySelector('.html_quiz');
//add event listener
const quiz = document.querySelector('.quiz');
const quizID= document.querySelector('#quiz_id');
 html.addEventListener('click', handleHtmlQuiz);
//create a function to handle quiz and add radio button to each quiz option
function handleHtmlQuiz(){
	for (let i=0; i<htmlQuestions.length; i++){
	console.log(htmlQuestions[i][0]);
	const p = document.createElement('p');
	let arr =  htmlQuestions[i][0] ;
	p.innerHTML = arr;
	quiz.appendChild(p);
		for (let j=1; j<htmlQuestions.length; j++){
		console.log(htmlQuestions[i][j]);
		const p = document.createElement('p');
		let arr1 =
			"<input type='radio' name='question' value = 'letter' > " +
			htmlQuestions[i][j];
		p.innerHTML = arr1;
		quiz.appendChild(p);
		console.log(quiz.innerHTML);
	}
	}
}
handleHtmlQuiz();
