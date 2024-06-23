const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askInput(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function greet(bot_name, birth_year) {
    console.log("Hello! My name is " + bot_name + ".");
    console.log("I was created in " + birth_year + ".");
}

async function remind_name() {
    console.log("Please, tell me your name.");
    let name = await askInput("");
    console.log("What a great name you have, " + name + "!");
}

async function guess_age() {
    console.log("Let me guess your age.");
    console.log("Enter remainders of dividing your age by 3, 5 and 7.");

    let rem3 = Number(await askInput(""));
    let rem5 = Number(await askInput(""));
    let rem7 = Number(await askInput(""));

    let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    console.log("Your age is " + age + "; that's a good time to start programming!");
}

async function count() {
    console.log("Now I will prove to you that I can count to any number you want.");

    let number = Number(await askInput(""));
    let current = 0;

    while (current <= number) {
        console.log(current + " !");
        current += 1;
    }
}

async function askQuestion() {
    console.log("Let's test your programming knowledge.");

    console.log("Why do we use methods?\n" +
        "1. To repeat a statement multiple times.\n" +
        "2. To decompose a program into several small subroutines.\n" +
        "3. To determine the execution time of a program.\n" +
        "4. To interrupt the execution of a program.");

    while (true) {
        let number = Number(await askInput(""));
        if (number === 2) {
            console.log("Congratulations, have a nice day!");
            break;
        } else {
            console.log("Please, try again.");
        }
    }
    rl.close();
}

async function main() {
    await greet('Yulia.01', '2024');  // change it as you need
    await remind_name();
    await guess_age();
    await count();
    await askQuestion();
}

main();