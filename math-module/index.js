exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.factorial = factorial;
exports.now = Date.now();

function add(number1,number2){
	return parseInt(number1,10)+parseInt(number2,10);
}
function subtract(number1,number2){
	return parseInt(number1,10)-parseInt(number2,10);
}
function multiply(number1,number2){
	return parseInt(number1,10)*parseInt(number2,10);
}
function divide(number1,number2){
	return parseInt(number1,10)/parseInt(number2,10);
}
function factorial(number){
	if(number===0){
		return 1;
	}
	else{
		return number*factorial(number-1);
	}
}