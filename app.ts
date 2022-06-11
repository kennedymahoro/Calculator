// query selectors
const numbers:NodeListOf<HTMLButtonElement> = document.querySelectorAll("[data-number]") as NodeListOf<HTMLButtonElement>;
const displayOutput:HTMLDivElement = document.querySelector("[data-display-output]") as HTMLDivElement;
const operators:NodeListOf<HTMLButtonElement> = document.querySelectorAll("[data-operator]") as NodeListOf<HTMLButtonElement>;
const deleteBtn:HTMLButtonElement = document.querySelector("[data-delete]") as HTMLButtonElement;
const clearBtn:HTMLButtonElement= document.querySelector("[data-clear]") as HTMLButtonElement;
const equalsBtn:HTMLButtonElement = document.querySelector("[data-equals]") as HTMLButtonElement;
// variables
let AllOutput:any = [];
let Number_1:number[] = [];
let Number_2:number[] = [];
let Current_Operator:string;
let Is_Operator:boolean = false;
// operator symbol
const Addition_Symbol:string = operators[0].innerText;
const subtraction_Symbol:string = operators[1].innerText;
const multiplication_Symbol:string = operators[2].innerText;
const divition_Symbol:string = operators[3].innerText;


const NUM_INPUTS = (num:number):void=>{
    if(Is_Operator) Number_2.push(num)
    else Number_1.push(num)
}


// forEach number
numbers.forEach(number => {
    number.addEventListener("click", ():void=>{
        AllOutput.push(number.innerText)
        NUM_INPUTS(Number(number.innerText))
        displayOutput.innerHTML = AllOutput.join('') 
    })
})
// forEach operator
operators.forEach(operator => {
    operator.addEventListener('click', ():void=>{
        Is_Operator = true;
        Current_Operator = operator.innerText;
        AllOutput.push(operator.innerText)
        displayOutput.innerHTML = AllOutput.join('') 
    })
})
// clear button
clearBtn.addEventListener('click', ():void=>{
    displayOutput.innerHTML = '';
    AllOutput = [];
    Number_1 = [];
    Number_2 = [];
    Is_Operator = false;
})
// delete button
deleteBtn.addEventListener('click', ():void=>{
    AllOutput.pop()
    Number_1.pop()
    Number_2.pop()
    displayOutput.innerHTML = AllOutput.join('') 
})
// equals buttton
equalsBtn.addEventListener('click',():void=>{
    //Number_1//2
    let Current_NUM1:number = Number(Number_1.join(''))
    let Current_NUM2:number = Number(Number_2.join(''))
    if(Current_Operator == Addition_Symbol){
        displayOutput.innerHTML = (Current_NUM1 + Current_NUM2).toString();
    }
    if(Current_Operator == subtraction_Symbol){
        displayOutput.innerHTML = (Current_NUM1 - Current_NUM2).toString();
    }
    if(Current_Operator == divition_Symbol){
        displayOutput.innerHTML = (Current_NUM1 / Current_NUM2).toString();
    }
    if(Current_Operator == multiplication_Symbol){
        displayOutput.innerHTML = (Current_NUM1 * Current_NUM2).toString();
    }
    AllOutput = [];
    Number_1 = [];
    Number_2 = [];
    Number_1.push(Number(displayOutput.innerText))
    AllOutput.push(displayOutput.innerText)
    Is_Operator = false;
})