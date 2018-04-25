var list = [
	'sun',
	NaN,
	'mon',
	'',
	null,
	'tue',
	'wed',
	,
	,
	'thus',
	undefined,
	'fri',
	null,
	'sat'
];


console.log(list);
var newList = [];

for(i in list){
	if (list[i]) {
		newList.push(list[i]);
	}
}

console.log('\n',newList);



//using filter

/*var newList;

newList = list.filter(Boolean);
console.log(newList);*/