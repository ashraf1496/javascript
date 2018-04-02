var monthName = "February 2018";
var days = 28;
var startingDay = 4;

console.log('\n\n Calendar of',monthName,'\n');
console.log('sun   mon   tue   wed   thu   fri   sat');

for(var i = 0; i < 5; i++){
	var dayRow = "";

	for(var j = 1; j <= 7; j++){
		var currentDay = 7* i + j - startingDay;

		if (currentDay > days) {
			break;
		}else if (currentDay < 1) {
			currentDay = " ";
		}

		if (currentDay > 9) {
			dayRow += currentDay +"    ";
		}else {
			dayRow += currentDay +"     ";
		}
		
	}
	console.log(dayRow);
}