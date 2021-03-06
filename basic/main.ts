export { }
let message = "Hello, I'm learning TypeScript with Mbr-Sagor";
let name = "Md. Bozlur Rosid Sagor";
console.log(message);
console.log(name);

let x = 10;
let y = 20;

console.log(`Total Result is : ${x + y}`);

// Basic concept of variable deceleration
let is_active: boolean = false;
let total: number = 10;
const username: string = "mbrsagor";
let about_me: string = `My usename is: ${username} find me on socail media.`;
console.log(about_me);

console.log(username.length);

let n: null = null;
let u: undefined = undefined;

let is_true: boolean = null;
let my_str: string = undefined;

// Array
let list: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(list);
console.log("\n");
let list2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(list2);

let mix: [string, number] = ['Age:', 26] // Fix array

// Enum
enum laptop { MacBook, MacBook_Air, MacBook_Pro, Imac, Imac_Pro }
let l: laptop = laptop.MacBook_Air;
console.log(l);

let any_key: any = 20;
any_key = 'hello';
any_key = true;
any_key = 40.5;

let multiType: number | boolean;
multiType = 20;
multiType = false;

// Function with optional paramiter
function addNumber(num: number, num2?: number): number {
    if (num2)
        return num + num2;
    else return num;
}
console.log(addNumber(20, 30));
console.log(addNumber(2));

// Function with default paramiter
function multipleNumber(x: number, y: number = 30) {
    if (x)
        return x * y;
    else return y;
}

console.log(multipleNumber(5, 2));
console.log(multipleNumber(2));


// Interface
function full_name(person: { first_name: string, last_name: string }) {
    console.log(`Fullname: ${person.first_name} ${person.last_name}`);
}
let _person = {
    first_name: 'Mbr',
    last_name: 'Sagor'
}
full_name(_person);

interface Person {
    first_name: string,
    last_name: string
}

function get_full_name(person: Person) {
    console.log(`My Name is: ${person.first_name} ${person.last_name}`);
}
get_full_name(_person);

// Arrow function
const my_name = (name: string) => {
    console.log(`My name is: ${name}`)
}
my_name('Md.Bozlur Rosid Sagor');
