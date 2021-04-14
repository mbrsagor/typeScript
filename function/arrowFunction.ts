let sum = (num: number, num2: number): number => {
    return num + num2;
}

console.log(sum(30, 20));

let say = () => console.log("Hey, I'm arrow function")
say();



function say_something(name: string){
    return `Hello thre, this is ${name}`
}

let _name = say_something("Sagor!");
console.log(_name);
