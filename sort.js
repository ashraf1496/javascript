var list = [
	1,14,11,52,7,42,9,3,2,41,15
];

var length = list.length-1;

for (var i = 0; i < length; i++) {
	for(var j = 0; j < length; j++){
		if (list[j] > list[j+1]) {
			[list[j],list[j+1]] = [list[j+1],list[j]];
		}
	}
}
console.log(list);

//swaping
/*var a=1,b=3;
[a,b] = [b,a];

console.log(a,b)*/