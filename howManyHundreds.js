function howManyHundreds(num){
	var remainder = num % 100;
	return (num - remainder)/100;
}

console.log(howManyHundreds(10));
console.log(howManyHundreds(894));
console.log(howManyHundreds(1000));