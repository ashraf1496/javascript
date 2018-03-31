//first program
var n = 5;
var factorial = 1;
for(i = n; i > 1; i--){
	factorial = factorial * i;
	//factorial *=i;
}
console.log(factorial);

//second program


for (j =1; j<=10; j++) {
	factorial = 1;
	for(var i = j; i > 1; i--){
		factorial = factorial *i;
	}
	console.log('factorial of j',j,'is',factorial,);
}
console.log('\n')

//above way is not a good way to solve .

// a good way to solve a pormlem given below
var factorial = 1;
for(var i =1; i<= 10; i++){
	factorial *= i;
	console.log('factorial of',i,'is',factorial);
}