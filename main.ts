#! /usr/bin/env mode
import chalk from "chalk";
import inquirer from "inquirer";

const result = await inquirer.prompt([
  { 
    message: chalk.blueBright.bold("\nPlease enter first digit:"), 
    type: "number", 
    name: "message1"
  },
  { 
    message: chalk.greenBright.bold("\nPlease enter second digit:"), 
    type: "number", 
    name: "message2"
  },
  {
    message: chalk.redBright.bold("\nPlease choose the operation to be performed:"),
    type: "list",
    name: "operators",
    choices: [
      chalk.cyanBright.bold("Addition"), 
      chalk.blueBright.bold("Subtraction"), 
      chalk.magentaBright.bold("Multiplication"), 
      chalk.yellowBright.bold("Division")
    ]
  },
]);


if (result.operators === chalk.cyanBright.bold("Addition")) {
    console.log(chalk.bgCyan.bold(`\nYour answer is: ${result.message1 + result.message2}`));
} else if (result.operators === chalk.magentaBright.bold("Multiplication")) {
    console.log(chalk.bgCyan.bold(`\nYour answer is: ${result.message1 * result.message2}`));
} else if (result.operators === chalk.blueBright.bold("Subtraction")) {
    console.log(chalk.bgCyan.bold(`\nYour answer is: ${result.message1 - result.message2}`));
} else if (result.operators === chalk.yellowBright.bold("Division")) {
    if (result.message2 === 0) {
        console.log(chalk.bgRed.bold("\nError: Division by zero"));
    } else {
        console.log(chalk.bgCyan.bold(`\nYour answer is: ${result.message1 / result.message2}`));
    }
} else {
    console.log(chalk.bgRed.bold("\nYour input is invalid, please try again."));
}