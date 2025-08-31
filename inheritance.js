class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed, age) {
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.breed = breed;
  }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }

  bark() {
    console.log(`${this.name} is barking`);
  }
}

class Cat extends Animal {
  constructor(name, color, age) {
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.color = color;
  }

  meow() {
    console.log(`${this.name} is meowing`);
  }
}

class Bird extends Animal {
  constructor(name, species, age) {
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.species = species;
  }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }

  fly() {
    console.log(`${this.name} is flying`);
  }
}

const cat1 = new Cat("Simba", "gray", 3);
// console.log(dog1);
cat1.eat();

const bird1 = new Bird("pp", "cockatoo", 3);
// console.log(dog1);
bird1.eat();

const dog1 = new Dog("lalu", "deshi", 4);
// console.log(dog1);
dog1.eat();
