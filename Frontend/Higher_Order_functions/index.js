function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function calulator(num1,num2,operator){
    return operator(num1,num2);
}

var num1 = Number(prompt("Enter the first number"));
var num2 = Number(prompt("Enter the second number"));

var operator = Number(prompt("Enter 1.Addition 2.Subtraction 3. Multiplication 4.Division"));

if(operator === 1){
    alert(calulator(num1,num2,add));
}
else if(operator === 2){
    alert(calulator(num1,num2,subtract));
}
else if(operator === 3){
    alert(calulator(num1,num2,multiply));
}
else if(operator === 4){
    alert(calulator(num1,num2,divide));
}
else{
    alert("Invalid Input");
}