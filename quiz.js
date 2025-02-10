const data = [
    {
        "que": "What color is the sun?",
        "a": "yellow",
        "b": "blue",
        "c": "green",
        "d": "red",
        "correct": "a"
    },
    {
        "que": "What do we drink in the morning?",
        "a": "milk",
        "b": "water",
        "c": "juice",
        "d": "soda",
        "correct": "a"
    },
    {
        "que": "What is the color of an orange?",
        "a": "red",
        "b": "yellow",
        "c": "orange",
        "d": "green",
        "correct": "c"
    },
    {
        "que": "What animal says 'meow'?",
        "a": "dog",
        "b": "cat",
        "c": "cow",
        "d": "sheep",
        "correct": "b"
    },
    {
        "que": "What is the color of a strawberry?",
        "a": "blue",
        "b": "red",
        "c": "yellow",
        "d": "green",
        "correct": "b"
    }
];



// console.log(AllInput,"LL")
// console.log(question,"kl")
// question.innerText=data[0].que
let resultText=document.querySelector(".resultText")
let ShowResult=document.querySelector(".result")
let question=document.querySelector(".question")
let AllInput=document.querySelectorAll(".options")
let submitButton=document.querySelector(".button")
let correctAnswer=0
let queIndex=0
let length=data.length

question.innerText=data[queIndex].que

let optionA=document.querySelector("#A")
let optionB=document.querySelector("#B")
let optionC=document.querySelector("#C")
let optionD=document.querySelector("#D")
// console.log(optionA,optionB,optionC,optionD)
optionA.nextElementSibling.innerText=data[queIndex].a
optionB.nextElementSibling.innerText=data[queIndex].b
optionC.nextElementSibling.innerText=data[queIndex].c
optionD.nextElementSibling.innerText=data[queIndex].d
// AllInput.forEach((ele,index)=>{
//     console.log(ele.nextElementSibling.innerText=data[queIndex].a,index)
// })


function nextQue(event){
//    console.log(event,"klkl")
    reset()
    queIndex++
    
    if(queIndex < length){
        question.innerText=data[queIndex].que
        optionA.nextElementSibling.innerText=data[queIndex].a
        optionB.nextElementSibling.innerText=data[queIndex].b
        optionC.nextElementSibling.innerText=data[queIndex].c
        optionD.nextElementSibling.innerText=data[queIndex].d
        
    }
    else{
        submitButton.style.display="none"
        result()
        console.log("dis")
    }
    // selectoption()
    
}






function reset(){
    AllInput.forEach((ele,index)=>{
        console.log(ele.checked,"in reset")
        ele.checked=false

    })


}







function selectoption(e){
    // console.log("called",  e.target)
   
    if( e.target.id.toLowerCase()== data[queIndex].correct){
        //   console.log(e.target.id.toLowerCase()== data[queIndex].correct)
          correctAnswer++
    }
    else{
          console.log("notnot")
    }

}

function result(){
   console.log("result")
   resultText.style.display="block"
   ShowResult.innerHTML=correctAnswer
}
