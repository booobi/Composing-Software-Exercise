const sum = x => x + x;
const mult = x => x * x;
const composedFunc = f => g => x => f(g(x));

console.log(composedFunc(mult)(sum)(3));

const append = s1 => s2 => s1 + s2;
console.log(append('Hello ')('World'));

//compose objects
const objA = {a: 'a'};
const objB = {b: 'b'};

const objC = {...objA, ...objB};
const objD = Object.assign({}, objA, objB);
console.log(objC);
console.log(objD);

//destructuring
const [var1, var2] = ['val1', 'val2'];
console.log(var1);

const obj = {
    myVar: 'myVal'
};
//Find myVar in obj and assign
const {myVar} = obj;
console.log(myVar);
//assign different name
const {myVar: myOtherVar} = obj;
console.log(myOtherVar);

//functions
const orZero = (n = 0) => n;
console.log(orZero(1));
console.log(orZero());

//named arguments
const createUser = ({name = 'defaultName', picture = 'defaultPicture'}) => ({name, picture});
const george = createUser({name: 'George', picture: 'GeorgePic'});
console.log(george);
//still need to pass empty object when using destructed arguments in createUser
console.log(createUser({}));

//rest and spread
const skipFirst = (head, ...tail) => tail;
console.log(skipFirst(1, 2, 3, 4, 5, 6, 7));

const shiftFirstToLast = (head, ...tail) => [...tail, head];
console.log(shiftFirstToLast(3, 1, 2));

//Currying
const highPass = cutoff => n => n >= cutoff;

function highPassLong(cutoff) {
    return function (n) {
        return n >= cutoff;
    };
}

console.log(highPass(3)(4));
console.log(highPassLong(3)(4));

//create more specialized function
const spec4 = highPass(4) //returns a function;
console.log(spec4(5));

const specArr = [1, 2, 3, 4, 5, 6];
console.log(specArr.map(sum));
console.log(specArr.map(sum).map(mult));

console.log(specArr.filter(spec4));
console.log(specArr.filter(function (n) { //same thing
    return n >= 4;
}));

console.log(specArr.filter(spec4).map(sum));

//higher order functions
const reduce = (reducer, initialValue, arr) => {
    let acc = initialValue;
    for (let i = 0; i < arr.length; i++) {
        acc = reducer(acc, arr[i]);
    }
    return acc;
};

console.log(reduce((initValue, el) => initValue + el, 0, [1, 2, 3]));

hoArr = [1,2,3,4,5,6];
const filter = (fn, arr) => reduce(((acc, currentEl) => fn(currentEl) ? acc.concat(currentEl) : acc), [], arr);
console.log(filter(n => n<=3, hoArr));