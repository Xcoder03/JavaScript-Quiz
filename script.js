const question = [
    q1 = { 
        ques: "Full Meaning Of CSS",
        Answer : [
            {correctAns:  "Cascading Style Sheet"},
            {ans: "Cascading Sweet Shit"},
            {ans: "Cascading Sweet Style"}
        ]
      
    },
    q2 = { 
        ques: "What is Javascript Used for ",
        Answer : [
            {correctAns: "Creating of dynamic and interactive web content"},
            {ans: "Functionalities"},
            {ans: "For Styling"}
        ]
    },
    q3 = { 
        ques: "What are methods in OOP",
        Answer : [
            {correctAns: "They are used to perform certain actions"},
            {ans: "Storing Variables"},
            {ans: "I dont Know"}
        ]
    
    },
    q = { 
        ques: "Another name for methods",
        Answer : [
            {correctAns: "Functions"},
            {ans: "Variables"},
            {ans: "I dont Know"}
        ]
    
    },
    q = { 
        ques: "Full Meaning of OOP",
        Answer : [
            {correctAns: "Object Oriented Programming"},
            {ans: "Object Oriented Poop"},
            {ans: "I dont Know"}
        ]
       
    },

    q = { 
        ques: "What are variables",
          Answer : [
            {correctAns: "A memory location"},
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
// const answers = document.querySelectorAll('.ans')
const ans1 = document.querySelector('.ans1')
const ans2 = document.querySelector('.ans2')
const ans3 = document.querySelector('.ans3')
const questions = document.querySelector('.question p')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
navigation.style.display = "none"
options.style.display = "none"
container.style.display = "none"
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
         questions.textContent = question[0].ques
         ans1.textContent = question[0].Answer[0].correctAns
         ans2.textContent = question[0].Answer[1].ans
         ans3.textContent = question[0].Answer[2].ans
      

         for (let index = 1; index < question.length; index++) {
             
             
         }


     }
})

