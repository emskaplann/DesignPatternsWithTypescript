var TheDecoratorPatternChallenge;
(function (TheDecoratorPatternChallenge) {
    var Topping = /** @class */ (function () {
        function Topping() {
        }
        return Topping;
    }());
    TheDecoratorPatternChallenge.Topping = Topping;
    var ThinCrustPizza = /** @class */ (function () {
        function ThinCrustPizza() {
        }
        ThinCrustPizza.prototype.getDesc = function () {
            return "Thin crust pizza";
        };
        ThinCrustPizza.prototype.cost = function () {
            return 10.99;
        };
        return ThinCrustPizza;
    }());
    TheDecoratorPatternChallenge.ThinCrustPizza = ThinCrustPizza;
    var ThickCrustPizza = /** @class */ (function () {
        function ThickCrustPizza() {
        }
        ThickCrustPizza.prototype.getDesc = function () {
            return "Thick crust pizza";
        };
        ThickCrustPizza.prototype.cost = function () {
            return 10.99;
        };
        return ThickCrustPizza;
    }());
    TheDecoratorPatternChallenge.ThickCrustPizza = ThickCrustPizza;
    var Cheese = /** @class */ (function () {
        function Cheese(pizza) {
            this.pizza = pizza;
        }
        Cheese.prototype.getDesc = function () {
            return this.pizza.getDesc() + ", Cheese";
        };
        Cheese.prototype.cost = function () {
            return this.pizza.cost() + 1.99;
        };
        return Cheese;
    }());
    TheDecoratorPatternChallenge.Cheese = Cheese;
    var Olive = /** @class */ (function () {
        function Olive(pizza) {
            this.pizza = pizza;
        }
        Olive.prototype.getDesc = function () {
            return this.pizza.getDesc() + ", Olive";
        };
        Olive.prototype.cost = function () {
            return this.pizza.cost() + 1.49;
        };
        return Olive;
    }());
    TheDecoratorPatternChallenge.Olive = Olive;
    var Pepper = /** @class */ (function () {
        function Pepper(pizza) {
            this.pizza = pizza;
        }
        Pepper.prototype.getDesc = function () {
            return this.pizza.getDesc() + ", Pepper";
        };
        Pepper.prototype.cost = function () {
            return this.pizza.cost() + 1.49;
        };
        return Pepper;
    }());
    TheDecoratorPatternChallenge.Pepper = Pepper;
})(TheDecoratorPatternChallenge || (TheDecoratorPatternChallenge = {}));
var pizza = new TheDecoratorPatternChallenge.ThickCrustPizza();
pizza = new TheDecoratorPatternChallenge.Cheese(pizza);
pizza = new TheDecoratorPatternChallenge.Olive(pizza);
pizza = new TheDecoratorPatternChallenge.Pepper(pizza);
console.log(pizza.getDesc() + " - $" + pizza.cost());
