// query selectors
const numbers:NodeListOf<HTMLButtonElement> = document.querySelectorAll("[data-number]")
const displayOutput:HTMLDivElement = document.querySelector("[data-display-output]")
const operators:NodeListOf<HTMLButtonElement> = document.querySelectorAll("[data-operator]")
const deleteBtn:HTMLButtonElement = document.querySelector("[data-delete]")
const clearBtn:HTMLButtonElement= document.querySelector("[data-clear]")
const percentBtn:HTMLButtonElement = document.querySelector("[data-percent]")
const equalsBtn:HTMLButtonElement = document.querySelector("[data-equals]")
// variables
let AllOutput:any = [];
let Pre_OutputNum:number;// previous output number

// operator symbol
const Addition_Symbol:string = operators[0].innerText;
const subtraction_Symbol:string = operators[1].innerText;
const multiplication_Symbol:string = operators[2].innerText;
const divition_Symbol:string = operators[3].innerText;


// forEach number
numbers.forEach(number => {
    number.addEventListener("click", ():void=>{
        AllOutput.push(number.innerText)
        displayOutput.innerHTML = AllOutput.join('') 
    })
})
operators.forEach(operator => {
    operator.addEventListener('click', ():void=>{
        AllOutput.push(operator.innerText)
        displayOutput.innerHTML = AllOutput.join('') 
    })
})
clearBtn.addEventListener('click', ():void=>{
    displayOutput.innerHTML = null;
    AllOutput = []
})
deleteBtn.addEventListener('click', ():void=>{
    AllOutput.pop()
    displayOutput.innerHTML = AllOutput.join('') 

})
equalsBtn.addEventListener('click',():void=>{
    let SplitOutputArray = AllOutput.join('').split("")

    
    
    
    Pre_OutputNum = Number(displayOutput.innerText);
})