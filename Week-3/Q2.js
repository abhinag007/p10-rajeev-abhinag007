// Using Call

const person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  person.greet();
  
  const anotherPerson = {
    name: "Mary",
    age: 25
  };
  
  person.greet.call(anotherPerson); 
  

  // Using Bind

  const multiply = function(x, y) {
    return x * y;
  };
  
  const multiplyByTwo = multiply.bind(null, 2);
  
  console.log(multiplyByTwo(5)); 
  

  // Using Apply

  const numbers = [1, 2, 3, 4, 5];

const sum = function() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

console.log(sum.apply(null, numbers));
