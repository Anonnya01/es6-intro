class Vehicle {
    #tin
  constructor(type, brand, price) {
    this.type = type;
    this.brand = brand;
    this.price = price;
    this.#tin = '12412QWSAS'
  }
  getThis() {
    console.log(this);
  }
  getPrice() {
    return this.price;
  }
  getTin(){
    return this.#tin
  }
}
const car1 = new Vehicle("car", "toyota", 50000);
const car2 = new Vehicle("car", "honda", 250000);

// car1.getThis()
console.log(car1.price);
// console.log(car1.getPrice());
// console.log(car2.getPrice());

const student = {
  name: "Rahul Pal",
  score: 10000,
  getScore: function () {
    console.log(this);
  },
  getScoreArrow: () => {
    console.log(this);
  },
};
// student.getScore();
// student.getScoreArrow()
// console.log('where',this);

