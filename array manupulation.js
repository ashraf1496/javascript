//in a array any type of data can be inserted

var myList = ['apple','banana',1,2,3];

console.log(myList);

myList[4] = 'grape'; //insert a array element

console.log(myList);

//add an element in last
myList[myList.length] = 'orange';

myList[myList.length] = 'mango';

myList[myList.length] = 'coconut';

console.log(myList);

//add an item at last using method

myList.push('pineapple');

myList.push('plum');

console.log(myList);

//add an item at first
myList.unshift('jackfruit');

console.log('\n',myList);

//delete an item from last

myList.pop();

console.log('\n',myList); //last item plum has deleted

//pop() also return removed value too

var lastElement = myList.pop();
console.log('\n',lastElement);

//delete an element form first

myList.shift();

console.log('\n',myList);

var delFirst = myList.shift()

console.log('\n',delFirst);
