class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    my_car() {
        console.log(`My car name: ${this.name}\nCar Price: ${this.price} BDT`);
    }
}
const car_instance = new Car("BMW", 100200);
const car_instance2 = new Car("NRB", 2120);
car_instance.my_car();
