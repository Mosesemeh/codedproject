function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "thats too big";
    } else {
        return a*b;
    }
};

multiply(3, 4);

const square = (x) => x**2;

const cube = (y) => y**3;

const multiply = (a, b) => a*b;


// Call Stack 
function foo() {
    foo()
}

foo();

setTimeout(() => {console.log(2)},2000)