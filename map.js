// const numbers = [4, 8, 2, 3, 5];
// const double =[]
// for(const num of numbers){
//     const result = num * 2
//     double.push(result)
// }

// const doubleIt = x => x * 2
// const double = numbers.map(doubleIt)

// const double = numbers.map(x => x*2)
//  const fiveTime = numbers.map(y => y * 5)
//  const result = numbers.map((num,index) =>{
//     // console.log(num*index);
//      return index*num
//  })
//  console.log(result);
 


// console.log(double);
// console.log(fiveTime);

// const friends = ['Zaved', 'Pavel', 'Nobel', 'Kodbel'];
// const length = friends.map(name => name.length)
// const firstWord =friends.map(z => z[0])
// console.log(length);
// console.log(firstWord);


// -----------for each---------//
// const numbers = [1, 5, 6, 10, 45, 2, 7]
// numbers.forEach(x => console.log(x))
// numbers.forEach(num => {
//     const tripled = num * 3;
//     console.log(tripled)
// })


// -----filter------//
// const numbers = [1, 5, 66, 10, 45, 12, 7]

// const bigger = numbers.filter(x => x >= 10)
// const even = numbers.filter(y => y % 2 ===0)

// console.log(even);
// console.log(bigger);

// -----find----//
// const firstEven = numbers.find(z => z % 2 === 0)
// console.log(firstEven);

// ------combined 3---------//


const students = [
    { id: 1, name: 'abul', marks: 50 },
    { id: 2, name: 'Najmul', marks: 85 },
    { id: 3, name: 'kabul', marks: 95 },
    { id: 4, name: 'habul', marks: 15 },
]


const names = students.map(student => student.name)
const marks = students.map(student => student.marks + 2)
const highMarks = students.filter(student => student.marks >= 80)
const highMarks1 = students.find(student => student.marks >= 80)
// console.log(names);
// console.log(marks);
console.log(highMarks);
console.log(highMarks1);






