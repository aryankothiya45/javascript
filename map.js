// let arr =[1,45,5,3,100];

//map
// res = arr.map(n => n*2);
// console.log(res);

//filter
// res = arr.filter( n => n % 2 == 0);
// console.log(res);

//reduce
// res = arr.reduce((total, n) => total + n, 0);
// console.log(res);

//array of objects
let user = [
    {name : "aa" , age : 21},
    {name : "bb" , age : 31},
    {name : "cc" , age : 27},
];

let res = user
    .filter(user => user.age > 25)
    .map(user => user.name);
console.log(res);


