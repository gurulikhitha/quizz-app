const quizData = [ 
    { 
        question: "Which language runs in a web browser?", 
        a: "Java", 
        b: "C", 
        c: "Python", 
        d: "JavaScript", 
        correct: "d", 
    }, 
    { 
        question: "What does CSS stand for?", 
        a: "Central Style Sheets", 
        b: "Cascading Style Sheets", 
        c: "Cascading Simple Sheets", 
        d: "Cars SUVs Sailboats", 
        correct: "b", 
    }, 
    { 
        question: "What does HTML stand for?", 
        a: "Hypertext Markup Language", 
        b: "Hypertext Markdown Language", 
        c: "Hyperloop Machine Language", 
        d: "Helicopters Terminals Motorboats Lamborginis", 
        correct: "a", 
    }, 
    { 
        question: "What year was JavaScript launched?", 
        a: "1996", 
        b: "1995", 
        c: "1994", 
        d: "none of the above", 
        correct: "b", 
    }, 
    { 
        question: "which property is used to change the text color in CSS?", 
        a: "font-style", 
        b: "text-color", 
        c: "color", 
        d: "font-color", 
        correct: "c", 
    }, 
    { 
        question: "Which keyword is used to declare a variable in javascript?", 
        a: "var", 
        b: "let", 
        c: "const", 
        d: "variable", 
        correct: "a", 
    }, 
    { 
        question: "Which tag is used to create a hyperlink in HTML?", 
        a: "<link>", 
        b: "<a>", 
        c: "<h1>", 
        d: "<p>", 
        correct: "b", 
    }, 
    { 
        question: "Which property is used to set the background color of an element in CSS?", 
        a: "background-color", 
        b: "color", 
        c: "background", 
        d: "background-style", 
        correct: "a", 
 
    }, 
    { 
        question: "Which function is used to display a message ina popup dialog box in javascript?", 
        a: "alert()", 
        b: "confirm()", 
        c: "prompt()", 
        d: "none of the above", 
        correct: "a", 
    }, 
]; 
 
const quiz = document.getElementById('quiz') 
const answerEls = document.querySelectorAll('.answer') 
const questionEl = document.getElementById('question') 
const a_text = document.getElementById('a_text') 
const b_text = document.getElementById('b_text') 
const c_text = document.getElementById('c_text') 
const d_text = document.getElementById('d_text') 
const submitBtn = document.getElementById('submit') 
 
let currentQuiz = 0 
let score = 0 
 
loadQuiz() 
 
function loadQuiz() { 
    deselectAnswers() 
 
    const currentQuizData = quizData[currentQuiz] 
 
    questionEl.innerText = currentQuizData.question 
    a_text.innerText = currentQuizData.a 
    b_text.innerText = currentQuizData.b 
    c_text.innerText = currentQuizData.c 
    d_text.innerText = currentQuizData.d 
} 
 
function deselectAnswers() { 
    answerEls.forEach(answerEl => answerEl.checked = false) 
} 
 
function getSelected() { 
    let answer 
 
    answerEls.forEach(answerEl => { 
        if(answerEl.checked) { 
            answer = answerEl.id 
        } 
    }) 
 
    return answer 
} 
 
submitBtn.addEventListener('click', () => { 
    const answer = getSelected() 
 
    if(answer) { 
        if(answer === quizData[currentQuiz].correct) { 
            score++ 
        } 
 
        currentQuiz++ 
 
        if(currentQuiz < quizData.length) { 
            loadQuiz() 
        } else { 
            quiz.innerHTML = ` 
                <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
 
                <button onclick="location.reload()">Reload</button> 
            ` 
        } 
    } 
})