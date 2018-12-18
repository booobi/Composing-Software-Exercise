const accFunction = (reducer, initialValue, arr) => {
    let acc = initialValue;
    for (let i = 0; i < arr.length; i++) {
        acc = reducer(acc, arr[i]);
    }
    return acc;
};

const filter = (fn, array) => accFunction((acc, el) => fn(el) ? acc.concat(el) : acc, [], array);

console.log(accFunction((acc, element) => acc + element, 0, [1, 2, 3])); //6

//value is less than 3
const lessThanThree = arr => filter(n => n < 3, arr);
console.log(lessThanThree([1, 2, 3, 4, 5, 6])); //1,2

//word length is 4 letters
const isFourLetters = arr => filter(n => n.length === 4, arr);
console.log(isFourLetters(['test', 'lemon', 'hand', 'donkey'])); //test, hand

//word starts with S
const startsWithS = arr => filter(n => n.startsWith('s'), arr)
console.log(startsWithS(['start', 'car', 'seed', 'storm'])); //start, seed, storm

//sum an array
const summingReducer = (acc, n) => acc + n;
console.log([2, 5, 6].reduce(summingReducer, 0)); //13

//implement arr.map with reduce
//map - new element for each value in the old array
const map = (fn, arr) => arr.reduce((acc, item, index, arr) => {
    return acc.concat(fn(item, index, arr))
}, []);
console.log(map((item) => item +" append", ['one', 'two'])); // [ 'one append ', 'two append ' ]