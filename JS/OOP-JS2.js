//more complex example

//creating constructor
// function Person(first, last, age, gender, interests) {
//   this.name = {
//     first: first,
//     last: last,
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.bio = function () {
//     alert(
//       `${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
//     );
//   };
//   this.greeting = function () {
//     alert(`Hi! I'm ${this.name.first}.`);
//   };
// }

// //creating an object instance from the constructor
// let person1 = new Person("Jeongjin", "Kim", 32, "male", [
//   "tennis",
//   "video game",
// ]);

//Further excercises
//conditions
//1.add gender classfication
//2.let bio incudes all elements from interests array

function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

  function printInterests(int) {
    let print = "";
    for (let i = 0; i < int.length - 1; i++) {
      print += ` ${int[i]},`;
    }
    print += ` and ${int[int.length - 1]}`;
    return print;
  }

  this.bio = function () {
    if (this.gender === "male") {
      alert(
        `${this.name.first} ${this.name.last} is ${
          this.age
        } years old. He likes ${printInterests(this.interests)}.`
      );
    } else {
      alert(
        `${this.name.first} ${this.name.last} is ${
          this.age
        } years old. She likes ${printInterests(this.interests)}.`
      );
    }
  };
  this.greeting = function () {
    alert(`Hi! I'm ${this.name.first}.`);
  };
}

//creating an object instance from the constructor
let person1 = new Person("Jeongjin", "Kim", 32, "male", ["tennis"]);

let person2 = new Person("Jinah", "Park", 33, "female", ["tennis", "running"]);
