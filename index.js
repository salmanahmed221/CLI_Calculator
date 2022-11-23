import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Starting() {
    const rainbowTitle = chalkAnimation.rainbow("Welcome to Calculator made by Salman Ahmed \n");
    await sleep();
    rainbowTitle.stop();
}
async function question() {
    const data = await inquirer.prompt([
        {
            name: "number1",
            type: "number",
            message: "Enter First Number ?",
            default: 0,
        },
        {
            name: "number2",
            type: "number",
            message: "Enter Second Number ?",
            default: 0,
        },
        {
            name: "operators",
            type: "list",
            message: "Select an Operator ?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            default: "operators",
        },
    ]);
    return handleanswer(data.operators, data.number1, data.number2);
}
const handleanswer = async (choose_operator, num1, num2) => {
    let answer;
    switch (choose_operator) {
        case "Addition":
            answer = num1 + num2;
            console.log(num1 + " + " + num2 + " = " + answer);
            break;
        case "Subtraction":
            answer = num1 - num2;
            console.log(num1 + " - " + num2 + " = " + answer);
            break;
        case "Multiplication":
            answer = num1 * num2;
            console.log(num1 + " * " + num2 + " = " + answer);
            break;
        case "Division":
            answer = num1 / num2;
            console.log(num1 + " / " + num2 + " = " + answer);
            break;
        default:
            return;
    }
};
await Starting();
await question();
