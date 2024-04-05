import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "enter firstNumber", type: "number", name: "firstNumber"},
    {message: "enter secondNumber", type: "number", name: "secondNumber"},
{
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices:["addition" , "subtraction", "multiplication", "divison",],
}

]);

// conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "divison") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select a valid operator");
}