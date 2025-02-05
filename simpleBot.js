const input = require('sync-input');

function greet(bot_name, birth_year) {
	console.log("Hello! My name is " + bot_name + ".");
	console.log("I was created in " + birth_year + ".");
}

function remind_name() {
	console.log("Please, tell me your name.");
	let name = input();
	console.log("What a great name you have, " + name + "!");
}

function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = Number(input());
	let rem5 = Number(input());
	let rem7 = Number(input());

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");
}

function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}
}

function askQuestion() {
	console.log("Let's test your programming knowledge.");

	console.log("Why do we use methods?\n" +
		"1. To repeat a statement multiple times.\n " +
		"2. To decompose a program into several small subroutines.\n" +
		"3. To determine the execution time of a program.\n" +
		"4. To interrupt the execution of a program.");

	let number = Number(input());
	if (number === 2){ console.log(end);}
	else {console.log("Please, try again.");}
}

function end() {
	console.log("Congratulations, have a nice day!");
}


greet('Yulia.01', '2024')  // change it as you need
remind_name();
guess_age();
count();
askQuestion();
end();
