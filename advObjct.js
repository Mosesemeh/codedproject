var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context vs scope

const object4 = {
    a: function() {
        console.log(this);
    }
}
// instantiation
class player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi i am ${this.name}, i'm a ${this.type}`);

    }
}
class wizard extends player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}
const wizard1 = new wizard(`shelly`, `Healer`);
const wizard2 = new wizard(`Shawn`, `Dark Magic`);