// The Factory Pattern
/*
    The Factory Method pattern defines an interface for creating an object,
    but lets subclasses decide which class to instantiate. Factory Method
    lets a class defer instantiation to subclasses.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TheFactoryPattern;
(function (TheFactoryPattern) {
    var PizzaStore = /** @class */ (function () {
        function PizzaStore() {
        }
        PizzaStore.prototype.orderPizza = function (type) {
            var pizza = this.pizzaFactory.createPizza(type);
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
            return pizza;
        };
        return PizzaStore;
    }());
    TheFactoryPattern.PizzaStore = PizzaStore;
    var ChicagoStylePizzaFactory = /** @class */ (function () {
        function ChicagoStylePizzaFactory() {
        }
        ChicagoStylePizzaFactory.prototype.createPizza = function (type) {
            if (type.toLowerCase() == "cheese")
                return new ChicagoStyleCheesePizza();
            else if (type.toLowerCase() == "veggie")
                return new ChicagoStyleVeggiePizza();
            else
                console.log("no pizza in that type!");
        };
        return ChicagoStylePizzaFactory;
    }());
    var NYStylePizzaFactory = /** @class */ (function () {
        function NYStylePizzaFactory() {
        }
        NYStylePizzaFactory.prototype.createPizza = function (type) {
            if (type.toLowerCase() == "cheese")
                return new NYStyleCheesePizza();
            else if (type.toLowerCase() == "veggie")
                return new NYStyleVeggiePizza();
            else
                console.log("no pizza in that type!");
        };
        return NYStylePizzaFactory;
    }());
    var ChicagoStylePizzaStore = /** @class */ (function (_super) {
        __extends(ChicagoStylePizzaStore, _super);
        function ChicagoStylePizzaStore() {
            var _this = _super.call(this) || this;
            _this.pizzaFactory = new ChicagoStylePizzaFactory();
            return _this;
        }
        return ChicagoStylePizzaStore;
    }(PizzaStore));
    TheFactoryPattern.ChicagoStylePizzaStore = ChicagoStylePizzaStore;
    var NYStylePizzaStore = /** @class */ (function (_super) {
        __extends(NYStylePizzaStore, _super);
        function NYStylePizzaStore() {
            var _this = _super.call(this) || this;
            _this.pizzaFactory = new NYStylePizzaFactory();
            return _this;
        }
        return NYStylePizzaStore;
    }(PizzaStore));
    TheFactoryPattern.NYStylePizzaStore = NYStylePizzaStore;
    var ChicagoStyleCheesePizza = /** @class */ (function () {
        function ChicagoStyleCheesePizza() {
            this.name = "ChicagoStyleCheesePizza";
        }
        ChicagoStyleCheesePizza.prototype.prepare = function () {
            console.log("preparing " + this.name);
        };
        ;
        ChicagoStyleCheesePizza.prototype.bake = function () {
            console.log("baking " + this.name);
        };
        ;
        ChicagoStyleCheesePizza.prototype.cut = function () {
            console.log("cutting " + this.name);
        };
        ;
        ChicagoStyleCheesePizza.prototype.box = function () {
            console.log("boxing " + this.name);
        };
        ;
        return ChicagoStyleCheesePizza;
    }());
    var NYStyleCheesePizza = /** @class */ (function () {
        function NYStyleCheesePizza() {
            this.name = "NYStyleCheesePizza";
        }
        NYStyleCheesePizza.prototype.prepare = function () {
            console.log("preparing " + this.name);
        };
        ;
        NYStyleCheesePizza.prototype.bake = function () {
            console.log("baking " + this.name);
        };
        ;
        NYStyleCheesePizza.prototype.cut = function () {
            console.log("cutting " + this.name);
        };
        ;
        NYStyleCheesePizza.prototype.box = function () {
            console.log("boxing " + this.name);
        };
        ;
        return NYStyleCheesePizza;
    }());
    var ChicagoStyleVeggiePizza = /** @class */ (function () {
        function ChicagoStyleVeggiePizza() {
            this.name = "ChicagoStyleVeggiePizza";
        }
        ChicagoStyleVeggiePizza.prototype.prepare = function () {
            console.log("preparing " + this.name);
        };
        ;
        ChicagoStyleVeggiePizza.prototype.bake = function () {
            console.log("baking " + this.name);
        };
        ;
        ChicagoStyleVeggiePizza.prototype.cut = function () {
            console.log("cutting " + this.name);
        };
        ;
        ChicagoStyleVeggiePizza.prototype.box = function () {
            console.log("boxing " + this.name);
        };
        ;
        return ChicagoStyleVeggiePizza;
    }());
    var NYStyleVeggiePizza = /** @class */ (function () {
        function NYStyleVeggiePizza() {
            this.name = "NYStyleVeggiePizza";
        }
        NYStyleVeggiePizza.prototype.prepare = function () {
            console.log("preparing " + this.name);
        };
        ;
        NYStyleVeggiePizza.prototype.bake = function () {
            console.log("baking " + this.name);
        };
        ;
        NYStyleVeggiePizza.prototype.cut = function () {
            console.log("cutting " + this.name);
        };
        ;
        NYStyleVeggiePizza.prototype.box = function () {
            console.log("boxing " + this.name);
        };
        ;
        return NYStyleVeggiePizza;
    }());
})(TheFactoryPattern || (TheFactoryPattern = {}));
var nyPizzaStore = new TheFactoryPattern.NYStylePizzaStore();
var chicagoPizzaStore = new TheFactoryPattern.ChicagoStylePizzaStore();
var nyCheesePizza = nyPizzaStore.orderPizza("cheese");
var chicagoVeggiePizza = chicagoPizzaStore.orderPizza("veggie");
