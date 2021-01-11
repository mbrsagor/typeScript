let message = "Hello, I'm learning TypeScript with Mbr-Sagor";
let name = "Md. Bozlur Rosid Sagor";
console.log(message);
console.log(name);
let x = 10;
let y = 20;
console.log(`Total Result is : ${x + y}`);
// Basic concept of variable deceleration
let is_active = false;
let total = 10;
const username = "mbrsagor";
let about_me = `My usename is: ${username} find me on socail media.`;
console.log(about_me);
console.log(username.length);
let n = null;
let u = undefined;
let is_true = null;
let my_str = undefined;
// Array
let list = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(list);
console.log("\n");
let list2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(list2);
let mix = ['Age:', 26]; // Fix array
// Enum
var laptop;
(function (laptop) {
    laptop[laptop["MacBook"] = 0] = "MacBook";
    laptop[laptop["MacBook_Air"] = 1] = "MacBook_Air";
    laptop[laptop["MacBook_Pro"] = 2] = "MacBook_Pro";
    laptop[laptop["Imac"] = 3] = "Imac";
    laptop[laptop["Imac_Pro"] = 4] = "Imac_Pro";
})(laptop || (laptop = {}));
let l = laptop.MacBook_Air;
console.log(l);
let any_key = 20;
any_key = 'hello';
any_key = true;
any_key = 40.5;
let multiType;
multiType = 20;
multiType = false;
// Function with optional paramiter
function addNumber(num, num2) {
    if (num2)
        return num + num2;
    else
        return num;
}
console.log(addNumber(20, 30));
console.log(addNumber(2));
// Function with default paramiter
function multipleNumber(x, y = 30) {
    if (x)
        return x * y;
    else
        return y;
}
console.log(multipleNumber(5, 2));
console.log(multipleNumber(2));
// Interface
function full_name(person) {
    console.log(`Fullname: ${person.first_name} ${person.last_name}`);
}
let _person = {
    first_name: 'Mbr',
    last_name: 'Sagor'
};
full_name(_person);
function get_full_name(person) {
    console.log(`My Name is: ${person.first_name} ${person.last_name}`);
}
get_full_name(_person);
// Arrow function
const my_name = (name) => {
    console.log(`My name is: ${name}`);
};
my_name('Md.Bozlur Rosid Sagor');
export {};
