// query selectors
const numbers = document.querySelectorAll("[data-number]")
const displayOutput = document.querySelector("[data-display-output]")
const operators = document.querySelectorAll("[data-operator]")
const deleteBtn = document.querySelector("[data-delete]")
const clearBtn = document.querySelector("[data-clear]")
const percentBtn = document.querySelector("[data-percent]")
const equalsBtn = document.querySelector("[data-equals]")
// variables
let AllOutput = [];
let ArrayOfOutputNum = [];// array of outputed numbers
let Pre_OutputNum;// previous output number
let ArrayofNumbers1;
let ArrayofNumbers2;
let isOperator = false;// if there is an operator fun inputs

// operator symbol
const Addition_Symbol = operators[0].innerText;
const subtraction_Symbol = operators[1].innerText;
const multiplication_Symbol = operators[2].innerText;
const divition_Symbol = operators[3].innerText;


function inputs(Number,Operator){
    if(isOperator == false && Number != null){
        ArrayofNumbers1.push(Number);
        AllOutput.push(Number)
        alert("Working")
    }
    if(isOperator == true && Number != null){
        ArrayofNumbers2.push(Number)
        AllOutput.push(Number)
        alert("Working")
    }
    if(Operator != null){
        AllOutput.push(Operator)
        alert("Working")
    }
    return AllOutput.join('');
}





// forEach number
numbers.forEach(number => {
    number.addEventListener("click", ()=>{
        displayOutput.innerHTML =  inputs(number.innerText,null);
    })
})
operators.forEach(operator => {
    operator.addEventListener('click', ()=>{
        displayOutput.innerHTML =  inputs(null,operator.innerText);
        isOperator = true;
    })
})
clearBtn.addEventListener('click', ()=>{
    Pre_OutputNum = displayOutput.innerText;
    displayOutput.innerHTML = null;
    ArrayOfOutputNum = [];
    AllOutput = []
})
deleteBtn.addEventListener('click', ()=>{
    ArrayOfOutputNum.pop()
    AllOutput.pop()
    displayOutput.innerHTML = AllOutput.join('') 

})