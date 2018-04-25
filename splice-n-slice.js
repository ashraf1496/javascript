var list = [
	'sun',	//0	-7
	'mon',	//1	-6
	'tue',	//2	-5
	'wed',	//3	-4
	'thu',	//4	-3
	'fri',	//5	-2
	'sat'	//6	-1


];

var chunk = list.slice(1,4);	//ekhane 1 holo-kotha theke suru hobe 
								// r  4  holo ses element er porer offset.
								//4 no offset er value chunk a include hobe na.

// var chunk = list.slice(1);

/*var length = list.length-3
var chunk2 = list.slice(length);*/

//var chunk = list.slice(-5,-3);

console.log(list,chunk);


/********splice**********/

var list = [
	'sun',	//0	-7
	'mon',	//1	-6
	'tue',	//2	-5
	'wed',	//3	-4
	'thu',	//4	-3
	'fri',	//5	-2
	'sat'	//6	-1


];

var chunkSplice = list.splice(1,3);	//here 1 is -offset no of starting chunk 	
									//and 3 is how many elemnet will chunked.

/*var chunkSplice2 = list.splice(-4);

console.log('\n',chunkSplice2);*/

console.log('\n',list,chunkSplice);

console.log(list.length,chunkSplice.length);


/*diffrence between slice and splice
1.slice a mul array thik thakbe but splice a mul array theke kete nia asbe*/