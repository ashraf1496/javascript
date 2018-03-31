//first program


var i ;
//for(initialization; condition; stepping)
for(var i = 0; i <= 10; i++){
	console.log(i);
}
console.log('\n');


//second program even number program using for loop
var i;
for(var i = 0; i <= 10; i += 2){
	console.log(i);
}
console.log('\n');

//third program odd number program using for loop
var i;
for(var i = 1; i <= 10; i += 2){
	console.log(i);
}
console.log('\n');

//infinite loop using for

var i;
i=0;
for(;;){
	i++;
	 console.log(i);

	 if (10 == i) {
	 	break;
	 }
}