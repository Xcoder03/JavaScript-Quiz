let isclicked = "false"
let tar
var count = 0
var score = 0

var num = 1
let question = [
    q1 = { 
        ques: "Full Meaning Of CSS",
        correct: "Cascading Style Sheet",
        Answer : [
           
            {ans: "Cascading Sweet Shit"},
            {ans:  "Cascading Style Sheet"},
            {ans: "Cascading Sweet Style"}
        ]
      
    },
    q2 = { 
        ques: "What is Javascript Used for ",
        correct: "Creating of dynamic and interactive web content",
        Answer : [
          
            {ans: "Functionalities"},
            {ans: "For Styling"},
            {ans: "Creating of dynamic and interactive web content"}
        ]
    },
    q3 = { 
        ques: "What are methods in OOP",
        correct: "Storing Variables",
        Answer : [
            {ans: "Storing Variables"},
            {ans: "They are used to perform certain actions"},
            {ans: "I dont Know"}
        ]
    
    },
    q4 = { 
        ques: "Another name for methods",
        correct: "Functions",
        Answer : [
            {ans: "I dont Know"},
            {ans: "Variables"},
            {ans: "Functions"}
         
        ]
    
    },
    q5 = { 
        ques: "Full Meaning of OOP",
        correct: "Object Oriented Programming",
        Answer : [
            {ans: "Object Oriented Poop"},
            {ans: "I dont Know"},
            {ans: "Object Oriented Programming"}
         
        ]
       
    },

    q6 = { 
        ques: "What are variables",
        correct: "A memory location",
        Answer : [
            {ans: "String Storage"},
            {ans: "A memory location"},
            {ans: "I dont Know"}
        ]
        
    }
]
const number = document.querySelector('.ques')
const navigation = document.querySelector('.navigation')
const options = document.querySelector('.options')
const  container = document.querySelector('.question-container')
const startBtn = document.querySelector('.start button')
let nameValue = document.querySelector('.start input')
const start = document.querySelector('.start')
const answers = document.querySelectorAll('.ans')
let questions = document.querySelector('.question p')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
navigation.style.display = "none"
options.style.display = "none"
container.style.display = "none"
const quiz =  () => {
    
    
    number.textContent = num
    questions.textContent = question[count].ques
   
    for (let i = 0; i < answers.length; i++) {
        answers[i].textContent = question[count].Answer[i].ans
        
    }

    for( const ans of answers){
     
        ans.addEventListener('click',(e)=> {
            answers.forEach(element => {
                element.classList.remove('click')
            })
            ans.classList.add('click')
        
            isclicked = "true"
            tar = e.target.textContent                
        })   
  }

}


startBtn.addEventListener('click', () =>{

     if(nameValue.value == ""){
         nameValue.classList.add("error")
     }
     else
     {
        navigation.style.display = "flex"
        options.style.display = "flex"
        container.style.display = "flex"
         start.style.display = "none" 
         quiz()                 
    }
})


 
nextBtn.addEventListener('click', () =>{
    
    if(isclicked == "true"){
        if(tar == question[count].correct){
            score+=10
            console.log(score)
            
        }
    }
  
   
    let target;
    
    count+=1
    num+=1
    if(count >= question.length){
        console.log(`Your score is ${score}`)
    }
    else{    
            number.textContent = num
            questions.textContent = question[count].ques
            for ( i = 0; i < answers.length; i++) {
            answers[i].textContent = question[count].Answer[i].ans
            
        }
        for( const an of answers){

            an.addEventListener('click',(e)=>{
                
                answers.forEach(element => {
                    element.classList.remove('click')
                })
                an.classList.add('click')
                target = e.target.textContent
                isclicked = "true"
                
                  
                
            
            })        
        } 
        if(isclicked == "true"){
            if(target == question[count].correct){
                score+=10
                console.log(score)
                isclicked = "false"
            }
            else{
                isclicked = "false"
            }
        }

    }
         
   })



