const chocolate = {
    hasChocolate: () => true
};

const caramelSwirl = {
    hasCaramelSwirl: () => true
};

const pecans = {
    hasPecans: () => true
};

const iceCream = Object.assign({}, chocolate, caramelSwirl, pecans);

console.log(`
    hasChocolate: ${ iceCream.hasChocolate()}
    hasCaramelSwirl: ${ iceCream.hasCaramelSwirl()}
    hasPecans: ${ iceCream.hasPecans()}
    `);


//example of functional inheritance
function base(spec) {
    var that = {};
    that.name = spec.name;
    return that;
}

function child(spec) {
    var that = base(spec);
    that.sayHello = () => 'Hello, I am a ' + spec.name;
    return that;
}

var result = child({ name: 'functional object' });
console.log(result.sayHello());


//example of functional mixin
let flying = o => {
    let isFlying = false;

    return Object.assign({}, o, {
        fly() {        //was wondering why you can't use ES6 arrow functions when defining object literals
            isFlying = true;
            return this;
        },
        isFlying() {
            return isFlying
        },
        land() {
            isFlying = false;
            return this;
        }
    });
}

console.log(flying({}));
console.log(flying({}).fly().isFlying());
console.log(flying({}).land().isFlying());