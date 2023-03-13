const operations = require('./functions');

function main(){

    const operand_one = 56;
    const operand_two = 4;

    const resultSum = operations.sum(operand_one,operand_two);
    const resultSubstract = operations.substract(operand_one,operand_two);
    const resultMultiply = operations.multiply(operand_one,operand_two);
    const resultDivide = operations.divideNumbers(operand_one,operand_two);

    console.log('resultSum: ', resultSum);
    console.log('resultSubstract: ', resultSubstract);
    console.log('resultMultiply: ', resultMultiply);
    console.log('resultDivide: ', resultDivide);

}

main();