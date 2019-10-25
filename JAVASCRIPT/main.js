//alert('Hello World');
//console.error('This is an error')
//console.log('Hello World');

//var, let, const

/*let age=30;
age=31;
console.log(age);*/
// string , number , boolean, null, undefined, symbol

/*const name="john";
const age=30;
const isCool=true;
const rating=4.5;
const x=null;
const y=undefined;
let z;

console.log("My name is" + name + " and my age is" + age);
console.log(`My name is ${name} and i am ${age}`);
*/

/*const s= 'hello, world';

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
console.log(s.split(', '));*/


/*const numbers = new Array(1,2,3,4,5);
const fruits = ['Apple','mango', 'banana',2];
fruits.push('pears')
fruits.unshift('strawberries')
fruits.pop();
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('Apple'))
console.log(fruits)*/



/*const person={
	firstName:'john',
	lastName:'doe',
	age:30,
	hobbies:['music','movies','sports'],
	address:{
		street:'50 main street',
		city:'Boston',
		state:'MA'
	}
}

console.log(person)

person.email='john@gmail.com'

const {firstName,lastName} = person;
console.log(firstName)*/

const todos = [
	{
		id:1,
		text: "take out trash",
		isCompleted:true
	},
	{
		id:2,
		text: "meeting with boss",
		isCompleted:false
	}
]

/*const todoJSON = JSON.stringify(todos);
console.log(todoJSON)*/


//for,while loop same as c++

/*for(let todo from todos){}*/

//forEach,map,filter
todos.forEach(function(todo){
	console.log(todo.text);
})


const todoText = todos.map(function(todo){
 	return todo.text;
});

console.log(todoText)

const todoCompleted = todos.filter(function(todo){
 	return todo.isCompleted === true;
});

console.log(todoCompleted)

