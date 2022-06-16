let isclicked
var count = 0
var score = 0
var score1 = 0
let question = [
    q1 = { 
        ques: "Full Meaning Of CSS",
        Answer : [
            {ans:  "Cascading Style Sheet"},
            {ans: "Cascading Sweet Shit"},
            {ans: "Cascading Sweet Style"}
        ]
      
    },
    q2 = { 
        ques: "What is Javascript Used for ",
        Answer : [
            {ans: "Creating of dynamic and interactive web content"},
            {ans: "Functionalities"},
            {ans: "For Styling"}
        ]
    },
    q3 = { 
        ques: "What are methods in OOP",
        Answer : [
            {ans: "They are used to perform certain actions"},
            {ans: "Storing Variables"},
            {ans: "I dont Know"}
        ]
    
    },
    q4 = { 
        ques: "Another name for methods",
        Answer : [
            {ans: "Functions"},
            {ans: "Variables"},
            {ans: "I dont Know"}
        ]
    
    },
    q5 = { 
        ques: "Full Meaning of OOP",
        Answer : [
            {ans: "Object Oriented Programming"},
            {ans: "Object Oriented Poop"},
            {ans: "I dont Know"}
        ]
       
    },

    q6 = { 
        ques: "What are variables",
          Answer : [
            {ans: "A memory location"},
            {ans: "String Storage"},
            {ans: "I dont Know"}
        ]
        
    },
]
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
const quiz =  () =>{
    questions.textContent = question[count].ques
   
    for (let i = 0; i < answers.length; i++) {
        answers[i].textContent = question[count].Answer[i].ans
        
    }

    for( const ans of answers){

        ans.addEventListener('click',(e)=>{
           if(e.target.textContent == question[count].Answer[0].ans ){
            score+=10
            console.log(score)
           }        
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
    count+=1
    if(count >= question.length){
        console.log(`Your score is ${score}`)
    }
    else{
            questions.textContent = question[count].ques
            for ( i = 0; i < answers.length; i++) {
            answers[i].textContent = question[count].Answer[i].ans
            
        }
        for( const an of answers){

            an.addEventListener('click',(e)=>{
                if(e.target.textContent === question[count].Answer[0].ans ){
                score+=10
                    
                }    
                console.log(score)
            
            })        
        } 

    }
         
   })



