const questions = [
   {
        question:"which is the largest animal in the world",
        answers:[
            {text:"shark", correct:false},
            {text:"blue whale", correct:true},
             {text:"elephant", correct:false},
            {text:"giraffe_OR_camel", correct:false}
        ]
    },
    {
        question:"which is the largest animal in the world",
        answers:[
            {text:"shark", correct:false},
            {text:"blue whale", correct:true},
             {text:"elephant", correct:false},
            {text:"giraffe_OR_camel", correct:false}
        ]
    },
    {
        question:"which is the largest animal in the world",
        answers:[
            {text:"shark", correct:false},
            {text:"blue whale", correct:true},
             {text:"elephant", correct:false},
            {text:"giraffe_OR_camel", correct:false}
        ]
    },
    {
        question:"which is the largest animal in the world",
        answers:[
            {text:"shark", correct:false},
            {text:"blue whale", correct:true},
             {text:"elephant", correct:false},
            {text:"giraffe_OR_camel", correct:false}
        ]
    }

];


const question_Element= document.getElelmentById("question");
const answer_Button=document.getElementById("answer-buttons");
const next_Buttons=document.getElementsByClassName("next-btn");


let currentQuestionIndex=0;
let score=0;

function startQuizz(){
    currentQuestionIndex=0;
    score=0;
    next_Buttons.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    // resetState();
    let currentQuestion=questions[currentQuestionIndex];    
    let questionNO=currentQuestionIndex+1; 
    question_Element.innerHTML = questionNO+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>  {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("ans-btn");
        answer_Button.appendChild(button);
    });
} 

startQuizz();   

// resetstate function will remove all previous ans 

// function resetState(){
//     next_Buttons_Element.style.display="none";
//     while(answer_Buttons.firstChild){
//         answer_Buttons.removeChild(answer_Buttons.firstChild);
//     }
// }

