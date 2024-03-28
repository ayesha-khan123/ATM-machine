#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
      {
        name: "pin",
        message:"enter your pin",
        type: "number"
      }
    ]
)

if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!")
   let operationans = await inquirer.prompt(
    [
      {
        name: "operation",
        message:"please select option",
        type: "list",
        choices: ["withdraw", "check balance", "fast cashe", "exit"],    
      }
    ]
);
 
 if (operationans.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
    [
        {
            name: "amount",
            message:"enter amount",
            type: "number"
        }
    ]
    )  
  
    if (amountAns.amount > myBalance) {
         console.log("insufficient balance");
    } else {
       myBalance = myBalance - amountAns.amount;
       console.log("your balance is " + myBalance);
    }
  
  } else if (operationans.operation === "check balance") {
    console.log("your balance is " + myBalance);
  } else if (operationans.operation === "fast cash") {
    let  cash = await inquirer.prompt(
    [
        {
            name: "fast",
            message:"choose amount",
            type: "list",
            choices: ["1000", "2000", "3000","5000",  "10000"]
        },
    ]
    );
  } else if
     (operationans.operation === "exit") 
      console.log("good bye");
    process.exit(0);
  }
