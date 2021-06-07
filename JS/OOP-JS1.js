//Constructors and object instances

//Simple example

//defining a persopn with a normal function
// function createNewPerson(name) {
//   const obj = {};
//   obj.name = name;

//   //method
//   obj.greeting = function () {
//     alert("Hi! I'm " + obj.name + ".");
//   };
//   return obj;
// }
//creating new person by calling createNewPerson function
// const salva = createNewPerson("Salva");
// salva.name;
// salva.greeting();

//-this is inconvenient, if we know we want to create an object,
//why do we need to explicitly create a new empty object and return it?

//this is where constructor functions comes in
// //!!A constructor function name usually starts with a capital letter
// function Person(name) {
//   this.name = name;
//   this.greeting = function () {
//     alert(`Hi! I'm ${this.name}.`);
//   };
// }
// //constructor is JS's version of a class.
// //it doesn't return anything or explicirly create an object
// //by using *this* object's name property and greeting() method will use
// //the name value passed to the constructor call

// //how do we call a constructor to create some objects?
// let person1 = new Person("Bob");
// let person2 = new Person("Sarah");

// //the result objects will be
// // {
// //     name: 'Bob',
// //     greeting: function() {
//       alert('Hi! I\'m ' + this.name + '.');
//     }
//   }
//   {
//     name: 'Sarah',
//     greeting: function() {
//       alert('Hi! I\'m ' + this.name + '.');
//     }
//   }
//!! we are definin same greeting() for every instance, which isn't ideal.
//To avoid this, we can define functions on the prototype instead
