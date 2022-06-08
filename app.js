// query selectors
var numbers = document.querySelectorAll("[data-number]");
var displayOutput = document.querySelector("[data-display-output]");
var operators = document.querySelectorAll("[data-operator]");
var deleteBtn = document.querySelector("[data-delete]");
var clearBtn = document.querySelector("[data-clear]");
var percentBtn = document.querySelector("[data-percent]");
var equalsBtn = document.querySelector("[data-equals]");
// variables
var AllOutput = [];
var Pre_OutputNum; // previous output number
var Number_1 = [];
var Number_2 = [];
var Current_Operator;
var Is_Operator = false;
// operator symbol
var Addition_Symbol = operators[0].innerText;
var subtraction_Symbol = operators[1].innerText;
var multiplication_Symbol = operators[2].innerText;
var divition_Symbol = operators[3].innerText;
var NUM_INPUTS = function (num) {
    if (Is_Operator)
        Number_2.push(num);
    else
        Number_1.push(num);
};
// forEach number
numbers.forEach(function (number) {
    number.addEventListener("click", function () {
        AllOutput.push(number.innerText);
        NUM_INPUTS(Number(number.innerText));
        displayOutput.innerHTML = AllOutput.join('');
        alert(Current_Operator);
    });
});
// forEach operator
operators.forEach(function (operator) {
    operator.addEventListener('click', function () {
        Is_Operator = true;
        Current_Operator = operator.innerText;
        AllOutput.push(operator.innerText);
        displayOutput.innerHTML = AllOutput.join('');
    });
});
// clear button
clearBtn.addEventListener('click', function () {
    displayOutput.innerHTML = null;
    AllOutput = [];
    Number_1 = [];
    Number_2 = [];
    Is_Operator = false;
});
// delete button
deleteBtn.addEventListener('click', function () {
    AllOutput.pop();
    Number_1.pop();
    Number_2.pop();
    displayOutput.innerHTML = AllOutput.join('');
    for (var i = 0; i < operators.length; i++) {
        if (AllOutput.pop() == operators[i].innerText) {
            Is_Operator = false;
        }
    }
});
percentBtn.addEventListener('click', function () {
    AllOutput.push(percentBtn.innerText);
    displayOutput.innerHTML = AllOutput.join('');
});
// equals buttton
equalsBtn.addEventListener('click', function () {
    //Number_1//2
    var Current_NUM1 = Number(Number_1.join());
    var Current_NUM2 = Number(Number_2.join());
    if (Current_Operator == Addition_Symbol) {
        displayOutput.innerHTML = (Current_NUM1 + Current_NUM2).toString();
    }
    if (Current_Operator == subtraction_Symbol) {
        displayOutput.innerHTML = (Current_NUM1 - Current_NUM2).toString();
    }
    if (Current_Operator == divition_Symbol) {
        displayOutput.innerHTML = (Current_NUM1 / Current_NUM2).toString();
    }
    if (Current_Operator == multiplication_Symbol) {
        displayOutput.innerHTML = (Current_NUM1 * Current_NUM2).toString();
    }
    Pre_OutputNum = Number(displayOutput.innerText);
    displayOutput.innerHTML = null;
    AllOutput = [];
    Number_1 = [];
    Number_2 = [];
    Is_Operator = false;
});
