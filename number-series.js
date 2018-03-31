//s0 = 1 2 3 4 5 6 7 8 9 . .  this is linear sequence or series

//s1 = 2 4 6 8 10 12 14 . . .each number is multiply with 2

//s2 = 1 4 7 10 13 16 . . begin form 1 then 3 added with each number

//s3 = 0 3 8 15 24 35 48 . . each number is squred then subtruct 1

//s4 = 1 4 3 8 5 12 7 16 9 20 . . odd number has no change and even number is multiply with 2

//s5 = 0 1 1 2 3 5 8 13 ... fibonacci series- 0 1 is fixed erpor theke prottekti number tar ager 
								// duita number er jogfol



/*var n = 85;
var sum = Math.floor(n / 10) + n % 10;
console.log(sum);﻿


*/

//s1 = 2 4 6 8 10 12 14
var series = " ";
var n;
for(var i = 1; i <=10; i++){
	n = i*2;
	series = series + n + " ";
}
console.log('series s1 =',series);

//s2 = 1 4 7 10 13 16

var series = '1 ';
var n = 1;
for(var i = 1; i <=10; i++){
	n = n+3;
	series = series + n + " ";
}
console.log('series s2 =',series);


//s3 = 0 3 8 15 24 35 48
var series = '';
for(var i = 1; i <=10; i++){
	n = i*i-1;
	series = series + n + " ";
}
console.log('series s3 =',series);


//s4 = 1 4 3 8 5 12 7 16 9 20

var series = '';
for(var i = 1; i <=10; i++){
	n = i;
	if (n%2 == 0) {
		n = i*2;
	}
	series = series + n + " ";
}
console.log('series s4 =',series);

//s5 = 0 1 1 2 3 5 8 13

var series = '0 1 ';
n = 0;
var x = 0;
var y = 1;
for(var i = 0;i < 10; i++){
	n = x + y;
	x = y;
	y = n;
	series = series + n + " ";
}
console.log('series s5 =',series);