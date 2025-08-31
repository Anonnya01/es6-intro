// const student = {
//     name: 'sami',
//     1: 50,
//    'home-address': 'uttara dhaka',
//     marks: 90
// }
// console.log(student[1]);
// const student2= console.log(student.marks);

// for(const key in student){
//     const value = student[key]
//     console.log(value);
// }


// const propName = '1'
// console.log(student[propName])


// ----------chain---------- //

const student = {
    name: 'Rafid',
    1: 50,
    family: {
        title: 'bhuyiah',
        // mother: {
        //     name: 'noor jahan',
        //     age: 45
        // }
    },
   'home-address': 'kochu khet',
    marks: 90
}

console.log(student.family.mother?.age);
