var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Laptop = /** @class */ (function () {
    function Laptop(name) {
        this.name = name;
    }
    Laptop.prototype.display = function () {
        console.log(this.name);
    };
    return Laptop;
}());
var Mac = /** @class */ (function (_super) {
    __extends(Mac, _super);
    function Mac(name, code) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        return _this;
    }
    Mac.prototype.find = function (name) {
        // execute AJAX request to find an Mac from a db
        return new Mac(name, 1);
    };
    return Mac;
}(Laptop));
var instance = new Mac("MacBook", 100);
instance.display(); //Macbook
var instance2 = instance.find('Macbook Ari');
