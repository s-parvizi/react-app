function Circle(radius) {
    let color = 'red';

    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    // bad practice, should be hidden
    // this.computeOptimumLocation = function (factor) {
    //     // ...
    // };
    let computeOptimumLocation = function (factor) {

    };

    this.draw = function () {
        computeOptimumLocation(0.1);
        //defaultLocation
        //this.radius
        console.log('draw');
    };

}

const circle = new Circle(10);
circle.draw();
