#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 10000; // Dollar
var myPin = 1234;
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    var operationans = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cashe", "exit"],
        }
    ]);
    if (operationans.operation === "withdraw") {
        var amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance = myBalance - amountAns.amount;
            console.log("your balance is " + myBalance);
        }
    }
    else if (operationans.operation === "check balance") {
        console.log("your balance is " + myBalance);
    }
    else if (operationans.operation === "fast cash") {
        var cash = await inquirer_1.default.prompt([
            {
                name: "fast",
                message: "choose amount",
                type: "list",
                choices: ["1000", "2000", "3000", "5000", "10000"]
            },
        ]);
    }
    else if (operationans.operation === "exit")
        console.log("good bye");
    process.exit(0);
}
