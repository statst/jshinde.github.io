//create questions variable;
const htmlQuestions = [
	{
		question:
			'Q.1 What does HTML stand for?\n(a) Hypertool Markup Language\n(b)Hypertext Markup Language\n(c)Hyperlink Manipulation Language\n(d)Hypertext Manipulation Language',
		answer: 'b'
	},
	{
		question:
			'Q.2 A set of characters that indicates start and end of HTML element is called_______\n(a)HTML\n(b)HTML tag\n(c)Header tag\n(d)Html element',
		answer: 'd'
	},
	{
		question:
			'Q.3 Raw text, images and other elements included in a web page\n(a)HTML tag\n(b)Website content\n(c)Website structure\n(d)HTML element',
		answer: 'b'
	},
	{
		question:
			'Q.4 A rule describing how to format a particular portion of a web page\n(a)Style\n(b)tag\n(c)Header\n(d)HTML',
		answer: 'a'
	},
	{
		question:
			'Q.5 What is the correct HTML for adding a background color of yellow?\n(a)background-color: yellow\n(b)background-color: #FFFF00\n(c)a and b\n(d)None of the above',
		answer: 'c'
	}
];
//create 
const html= document.querySelector('.html_quiz');
html.addEventListener('click', handleHtmlQuiz);
const quiz = document.querySelector('.quiz');
function handleHtmlQuiz(){
    let score = 0;
    for (let i = 0; i < htmlQuestions.length; i++) {
			const p = document.createElement('p');
			// const li = document.createElement('li');
			// const list = ul.appendChild(li);
			let arr = '<pre>' + htmlQuestions[i].question + '\n' + '</pre>';
			p.innerHTML = arr;
			quiz.appendChild(p);
			console.log(quiz.innerHTML);
		}
}1
const cssQuestions = [
	{
		question:
			'What does CSS stand for?\n(a)Creative Style Sheet\n(b)colored Style Sheet\n(c)Cascading Style Sheet\n(d)Content Style Sheet',
		answer: 'b'
	},
	{
		question:
			'How to set style of a certain HTML element with id of “quiz”?\n(a).quiz{}\n(b).quiz()\n(c)#quiz{}(d)id.quiz{}',
		answer: 'a'
	},
	{
		question:
			'Given a margin: 10px 20px 5px 15px Where does 5px value will assigned?\n(a)Top\n(b)Right\n(c)left\n(d)bottom',
		answer: 'd'
	},
	{
		question:
			'How do you add comments in CSS?\n(a)// comment\n(b)/* comment\n(c)/* comment*/(d)<!—comment-->',
		answer: 'c'
	},

];
