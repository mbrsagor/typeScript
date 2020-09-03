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
