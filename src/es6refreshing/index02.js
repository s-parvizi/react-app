// Objects

const person = {
    name: 'Mosh',
    // function inside object is called method
    position:{
      x:1,
      y:2
    },
    walk: function () {
        console.log(this);
    },
    talk(){}
};

person.walk();
person.talk();
person['name'] = 'John';

const targetMember = 'name';
person[targetMember.valueOf()] = 'Bob';

const walk = person.walk();
// this will result in undefiled, when we use method as standalone function, this refers to window
// in restricted mode reference to window object is undefined
// in JS every function is an object
walk();

const walk2 = person.walk.bind(person);
// the bind method fix the problem here
walk2();