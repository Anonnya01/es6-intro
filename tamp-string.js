// const poem = 'amm pata jora jora
// marbu chabuk chorbe ghora'

// const poem = 'twinkle twinkle \n'+
// 'little stat\n'+
// 'how i wonder'

const poem = `twinkle twinkle  
little stat
how i wonder
what you are`;
// console.log(poem)

function sum(num1, num2) {
  const result = num1 + num2;
  // const output = 'sum of ' + num1 + ' and ' + num2 + ' is equal to ' + result;
  const output = `sum of ${num1} and ${num2} is equal to ${result}`;
  console.log(output);
}
sum(5, 7);

const price = 50;
const discountedPrice = `Discounted Price of ${price} after 20% discount ${
  price * 0.8
}`;
console.log(discountedPrice);
