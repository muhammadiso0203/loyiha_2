import os from 'os';



const args = process.argv.slice(2);

if (args.length !== 3) {
    console.error('Son yetarli emas');
    process.exit(1);
}

const [num1, operator, num2] = args;

const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

if (isNaN(number1) || isNaN(number2)) {
    console.error('Faqat son kiriting');
    process.exit(1);
}

let result;

switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;
    default:
        console.error('Operator notog`ri');
        process.exit(1);
}

console.log(`Natija: ${result}`);