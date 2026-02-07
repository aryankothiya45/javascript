
//usage of get
// let dictionary = {
//   'Hello': 'Hola',
//   'Bye': 'Adiós'
// };

// dictionary = new Proxy(dictionary, {
//   get(target, phrase) { 
//     if (phrase in target) {
//       return target[phrase];
//     } else {
//       return phrase;
//     }
//   }
// });

// console.log( dictionary['Hello'] );
// console.log( dictionary['Welcome to Proxy']);






//usage of set 
let numbers = [];

numbers = new Proxy(numbers, {
    set(target, prop, val) {
        if (typeof val == 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});

numbers.push(1);
numbers.push(2);
console.log("Length is: " + numbers.length);

numbers.push("test");
console.log("This line is never reached because an error is thrown before.");