#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 6666;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!");
}
else {
    console.log("Incorrect pin code!!");
}
if (pinAnswer.pin == myPin) {
    let operationAns = await inquirer.prompt([
        {
            name: "accountType",
            message: "Select account type",
            type: "list",
            choices: ["Current account", "Savings account"],
        },
        {
            name: "transMethod",
            type: "list",
            message: "Select your transaction method",
            choices: ["Cash withdraw", "Fast cash"],
        },
    ]);
    if (operationAns.transMethod === "Cash withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Enter your withdraw amount",
                type: "number",
            },
        ]);
        if (pinAnswer.pin) {
            let balance = Math.floor(Math.random() * 20000 + 1);
            console.log(myBalance);
            let enterAmount = pinAnswer.account;
        }
        if (myBalance >= amountAns.withdraw) {
            myBalance -= amountAns.withdraw;
            console.log(`Your remaining Balance is: ${myBalance}`);
        }
        else {
            console.log(`Insufficient Balance`);
        }
    }
    else {
        let fashcastAmount = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "Select your withdraw amount",
                choices: ["3000", "4000", "8000", "15000"],
            },
        ]);
        if (myBalance >= fashcastAmount) {
            myBalance -= fashcastAmount;
            console.log(`Your remaining Balance is: ${myBalance}`);
        }
    }
}
