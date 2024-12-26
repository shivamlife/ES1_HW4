console.log('Hello!');
// Question 1. Define an object 'car' with two properties, brand and model.
const car = {
  brand: 'Toyota',
  model: 'Corrolla',
};
// 1.1 Console the 'brand' property of the 'car' object.
console.log('1.1:', car.brand);
// 1.2 Console the 'model' property of the 'car' object.
console.log('1.2:', car.model);
// 1.3 Change the value of 'brand' property of the 'car' object to "Honda".
car.brand = 'Honda';

// 1.4 Console the updated 'car' object.
console.log('1.2:', car);

// 1.5 Add two more properties to the 'car' object, year and color. Assign the value for year as 2022 and value for color as “Blue”.
car.year = 2022;
car.color = 'Blue';
console.log(car);

// 1.6 Use for-in loop to print all properties of the 'car' object.
console.log(`Properties of car object`);
for (let key in car) {
  console.log(car[key]);
}

// Question 2. Define an object 'citizen' with three properties, name, age and occupation.
const citizen = {
  name: 'Ramesh Kumar',
  age: 68,
  occupation: 'Retired',
};
// 2.1 Change the 'age' property of the 'citizen' object to 68 and print age to the console.
console.log('age:', citizen.age);

//   2.2 Add 2 to the 'age' property of the 'citizen' object and print the age to the console.
citizen.age = 70;
console.log('Updated age:', citizen.age);
// 2.3 Add a property city to the object with value “Delhi” and then print all properties of the 'citizen' object using for-in loop.
citizen.city = 'Delhi';
console.log(`-----------`);
for (let key in citizen) {
  console.log(citizen[key]);
}

// Question 3: Create a person object with properties name and age. Put your own value.
const person = {
  name: 'Shivam',
  age: 25,
};

// 3.1 Add a property 'bp' to the person object with value "Normal".
person.bp = 'Normal';
// 3.2 Check age and bp for fitness to travel. If the age of the person is above 60 and the bp is normal, then console "Fit to travel." otherwise console "Not fit to travel."
if (person.age > 60 && person.bp == 'Normal') {
  console.log('Fit to travel');
} else {
  console.log('Not Fit to travel');
}
// Output should be as per your object values.
