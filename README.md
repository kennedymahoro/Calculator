# Calculator Project
[Calculator site](https://kennedymahoro.github.io/Calculator/)
---
---

# HTML:
 ## Content-grid
    * data-display-output also class of display-output
    * data-clear also class of span-2
    * data-delete
    * data-number
    * data-operator
    * data-equals also class of span-2
# css:
* centered content-grid with flex
* created grid-column
```css
.content-grid{
    display: grid;
    grid-template-columns: repeat(4,8vw)
}
```
* styled the display-output
    * changed color
    * changed padding
    * changed font-size
    * changed height
* .span-2
    * The class for span 2
* Styled All buttons
    * changed cursor to pointer
    * changed height
    * changed color
    * changed font-size
    * changed border
    * And changed background-color
* Added a button:hover
# Typescript:
* Got all the HTML elements
```typescript
const numbers:NodeListOf<HTMLButtonElement> = document.querySelectorAll("[data-number]") as NodeListOf<HTMLButtonElement>;
```
* Variables
```typescript
let AllOutput:any = [];
let Number_1:number[] = [];
let Number_2:number[] = [];
let Current_Operator:string;
let Is_Operator:boolean = false;
```
* All of the operator symbols
```typescript
const Addition_Symbol:string = operators[0].innerText;
```
* function NUM_INPUTS
```typescript
const NUM_INPUTS = (num:number):void=>{
    if(Is_Operator) Number_2.push(num)
    else Number_1.push(num)
}
```
    * used to conform that there is an operator and
    * that it needs to push the num to a new array
* And the rest of the eventlistener loops
```typescript

clearBtn.addEventListener('click', ():void=>{
    displayOutput.innerHTML = '';
    AllOutput = [];
    Number_1 = [];
    Number_2 = [];
    Is_Operator = false;
})
```
* Equations and the if statements
```typescript
if(Current_Operator == subtraction_Symbol){
    displayOutput.innerHTML = (Current_NUM1 - Current_NUM2).toString();
}
```
* Then it resets the arrays to empty
---
---
# The End.