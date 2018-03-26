//first program
var i = 0;

while (i < 10) {
	// statement
	i++;
	console.log(i);
}

//second program
var j = 0;
while (j <= 10) {
	// statement
	if (j % 2 == 0) {
		console.log('modulas value of j',j);
	}
	j++;
}

//third progrma
var k = 0;
while (k <= 10) {
	// statement
	console.log(k);
	k += 2;	//meaning k = k+2;
}

//Fourth program

var h = 0;
while (true) {
	// statement
	console.log('value of h is ',h);
	if (10 == h) {
		break;
	}
	h++;
}

