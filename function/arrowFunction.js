var sum = function (num, num2) {
    return num + num2;
};
console.log(sum(30, 20));
var say = function () { return console.log("Hey, I'm arrow function"); };
say();
function say_something(name) {
    return "Hello thre, this is " + name;
}
var _name = say_something("Sagor!");
console.log(_name);
