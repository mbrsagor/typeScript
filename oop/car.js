var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.my_car = function () {
        console.log("My car name: " + this.name + "\nCar Price: " + this.price + " BDT");
    };
    return Car;
}());
var car_instance = new Car("BMW", 100200);
var car_instance2 = new Car("NRB", 3943);
car_instance.my_car();
