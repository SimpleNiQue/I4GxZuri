function calc(){
  
  
  var action = prompt(`What do you want to do?? \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division\n\n"**You can type your choice as number`);
  
  if (action == 1 || action == "addition" || action == "Addition"){
    num1 = prompt("Enter first number")
    num1 = Number(num1)
    num2 = prompt("Enter second number")
    num2 = Number(num2)
    alert(`${num1} + ${num2} = ${num1 + num2}`)
  }
  
if (action == 2 || action == "subtraction" || action == "Subtraction") {
    num1 = prompt("Enter first number")
    num1 = Number(num1)
    num2 = prompt("Enter second number")
    num2 = Number(num2)
    alert(`${num1} - ${num2} = ${num1 - num2}`)
  }
  
  
if (action == 3 || action == "multiplication" || action == "Multiplication") {
    num1 = prompt("Enter first number")
    num1 = Number(num1)
    num2 = prompt("Enter second number")
    num2 = Number(num2)
    alert(`${num1} * ${num2} = ${num1 * num2}`)
  }
  
  
if (action == 4 || action == "division" || action == "Division") {
  num1 = prompt("Enter first number")
  num1 = Number(num1)
  num2 = prompt("Enter second number")
  num2 = Number(num2)
  alert(`${num1} / ${num2} = ${num1 / num2}`)
}
}

calc()
