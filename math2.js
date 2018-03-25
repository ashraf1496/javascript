var n1 = 5;
var r1 = 5 % 2;

console.log(r1);


// add two variable
var x = 5;
var y = 7;
var total = x + y;

console.log(total);


//increament and decreament operator

var x = 6;
x++;    // meaning:  x = x+1

console.log(x);

// x, y

var x1;
var y1 = 4;

 x1 = y1++;    //meaning :  x=y and y=y+1

console.log("x1 =",x1,"y1 =",y1);

// or
/*
var a;
var b = 4;
 var a = b;
 var b = b+1;

 console.log("a =",a,"b =",b);

*/

// again
 /*
var a;
var b = 4;
var b = b+1;
 var a = b;

 console.log("a =",a,"b =",b);
*/

// or

var a;
var b = 4;
var a = ++b;

 console.log("a =",a,"b =",b);


 //Assingment operator

 var c = 4;
 c +=2; // meaning: c = c+2;
 //c -= 2 maening  c = c-2
 // c *= 2 meaning  c = c*2
 // c /= 4 meaning  c = c/4

console.log("c =",c);


// reminder
var d = 4;

  d %= 3;    //meanig  c = c % 5
//  d %=2; // resule hobe: d=0;
console.log("d =",d);

//recapture
var x3;
var y3 =4;

x3 = --y3;
//meanig-holo-
//y3 = y3-1;
//x3 = y3;

console.log("x3=",x3,"y3 =",y3);

var x5;
var y5 = 4;
x5= y5--;
//meanig holo-
//x5 = y5;
//y5 = y5-1;

console.log("x5=",x5,"y5 =",y5);
