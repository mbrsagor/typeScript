abstract class Laptop {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    display(): void {
        console.log(this.name);
    }

    // abstract final(string): Laptop;
}

class Mac extends Laptop {
    empCode: number;

    constructor(name: string, code: number) {
        super(name); // must call super()
        this.empCode = code;
    }

    find(name: string): Laptop {
        // execute AJAX request to find an Mac from a db
        return new Mac(name, 1);
    }
}

let instance: Laptop = new Mac("MacBook", 100);
instance.display(); //Macbook

let instance2: Laptop = instance.find('Macbook Ari');
