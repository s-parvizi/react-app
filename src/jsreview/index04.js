// Create Object 2 : Constructors

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log(radius);
    }
}

const circle = new Circle(10);
//Circle.call({}, 1); same as new Circle(1);
//Circle.call(window, 1); same as Circle(1) without new;
//Circle.apply({}, [1, 2, 3]);

circle.location = {x: 1};

const propertyName = 'center location';
circle[propertyName] = {x: 1};

delete circle.location;

for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
    console.log('Circle has a radius.');

console.log(circle.radius);
circle.draw();
