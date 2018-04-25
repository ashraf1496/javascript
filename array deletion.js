/*var male = ['hasem', 'alam', 'jahangir','hanif', 'rupon','asifa'];
var female = ['mukta','arifa'];

var lastPerson = male.pop();
female.push(lastPerson);

console.log(male,female);
*/

var male = ['hasem', 'alam', 'asifa','hanif', 'rupon','jahangir'];
var female = ['mukta','arifa'];

var PersonToRemove = male[2];
female.push(PersonToRemove);

delete(male[2]);

//male.splice[2,1];	//using splice method

console.log(male,female);
console.log(male.length,female.length);
