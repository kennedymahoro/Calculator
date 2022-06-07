// query selectors
const Numbers:NodeListOf<HTMLButtonElement> = document.querySelectorAll("[data-number]")
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

// operator symbol
const Addition_Symbol = operators[0].innerText;
const subtraction_Symbol = operators[1].innerText;
const multiplication_Symbol = operators[2].innerText;
const divition_Symbol = operators[3].innerText;


// forEach number
numbers.forEach(number => {
    number.addEventListener("click", ()=>{
        //displayOutput.innerHTML =  inputs(number.innerText,null);
        AllOutput.push(number.innerText)
        displayOutput.innerHTML = AllOutput.join('') 
    })
})
operators.forEach(operator => {
    operator.addEventListener('click', ()=>{
        AllOutput.push(operator.innerText)
        displayOutput.innerHTML = AllOutput.join('') 
    })
})
clearBtn.addEventListener('click', ()=>{
    Pre_OutputNum = displayOutput.innerText;
    displayOutput.innerHTML = null;
    AllOutput = []
})
deleteBtn.addEventListener('click', ()=>{
    ArrayOfOutputNum.pop()
    AllOutput.pop()
    displayOutput.innerHTML = AllOutput.join('') 

})
equalsBtn.addEventListener('click',()=>{
    let SplitOutputArray = AllOutput.join('').split("")
})