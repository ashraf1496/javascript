
//first propram
var time1 = 120;
var time2 = 45;
var distance1 = 10;
var distance2 = (distance1*time2)/time1;

if (time1 == 120 && distance1 == 10) {
	console.log("in "+time2+" minute,kamal will go",distance2+"km");
}

//second program
var celsTemp = 10;
var fahrTemp = (celsTemp * (9/5)) + 32;
console.log(celsTemp+" degree celsius equal to ",fahrTemp+" degree fahrenheit");


//third program
/*
var StartPoint = 0;
var endPoint;
var sameTime = 60;
var kamal = "kamal";
var jamal = "jamal";
var kamalReached = 15;
var jamalReached =kamalReached -3;
var distDiff = 3;

var time = 0;

while (time <= 60) {
	// statement
	console.log(maxDist);
	if (kamalReached == 15) {
	console.log('jamal Reached ',jamalReached);

}
}
*/


//fourth program
var i = 0;
while (i <= 100) {
	// statement
	if (i % (3 && 7) == 0) {
		console.log(i);
	}
	i++;
}

//fifth program

    var sum = 0;
    for(var x=2; x<=50; x = x+2){
      if(x % 2 === 0){
      sum += x;
      }
    }
    console.log("total of 0 to 50 even number is",sum);
