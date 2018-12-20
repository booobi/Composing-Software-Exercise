const testArray = [1, 2, 3];
const addOne = n => n + 1;
const addTwo = n => n + 2;

console.log(testArray.map(x => addOne(addTwo(x)))); //4,5,6
console.log(testArray.map(x => addOne(x)).map(x => addTwo(x))); //4,5,6
console.log(testArray.map(x => (n => n + 1)((n => n + 2)(x)))); //4,5,6

const customFunctor = val => ({
    map: fn => customFunctor(fn(val))
});

//obeys identity law (f.map(x => x) returns f
const indetityTrace = x => {
    console.log(x);
    return x;
};
customFunctor(2).map(indetityTrace); //2

//obeys composition law functor.map(f(g(x))) = functor.map(g).map(f)
const double = x => {
    console.log('After double ' + x * 2);
    return x * 2;
};
const triple = x => {
    console.log('After triple ' + x * 3);
    return x * 3;
};
customFunctor(2).map(double).map(triple); //4 12
customFunctor(2).map(x => triple(double(x)));//4 12

