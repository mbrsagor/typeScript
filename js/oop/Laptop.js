class Laptop {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class Mac extends Laptop {
    constructor(name, code) {
        super(name); // must call super()
        this.empCode = code;
    }
    find(name) {
        // execute AJAX request to find an Mac from a db
        return new Mac(name, 1);
    }
}
let instance = new Mac("MacBook", 100);
instance.display(); //Macbook
let instance2 = instance.find('Macbook Ari');
