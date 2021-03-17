// The Decorator Pattern
/*
   This pattern attaches additional resposibilities to an
   object dynamically. Decorators provide a flexible alternative to
   subclassing for extending functionality.
*/
var TheDecoratorPattern;
(function (TheDecoratorPattern) {
    var Beverage = /** @class */ (function () {
        function Beverage() {
        }
        return Beverage;
    }());
    TheDecoratorPattern.Beverage = Beverage;
    var DarkRoast = /** @class */ (function () {
        function DarkRoast() {
            this.description = "Dark Roast Coffee";
        }
        DarkRoast.prototype.cost = function () {
            return 0.99;
        };
        DarkRoast.prototype.getDesc = function () {
            return this.description;
        };
        return DarkRoast;
    }());
    TheDecoratorPattern.DarkRoast = DarkRoast;
    var CondimentDecorator = /** @class */ (function () {
        function CondimentDecorator() {
        }
        return CondimentDecorator;
    }());
    TheDecoratorPattern.CondimentDecorator = CondimentDecorator;
    var Whip = /** @class */ (function () {
        function Whip(beverage) {
            this.beverage = beverage;
            this.description = ", Whip";
        }
        Whip.prototype.cost = function () {
            return this.beverage.cost() + 0.10;
        };
        Whip.prototype.getDesc = function () {
            return this.beverage.getDesc() + this.description;
        };
        return Whip;
    }());
    TheDecoratorPattern.Whip = Whip;
    var Milk = /** @class */ (function () {
        function Milk(beverage) {
            this.beverage = beverage;
            this.description = ", Milk";
        }
        Milk.prototype.cost = function () {
            return this.beverage.cost() + 0.20;
        };
        Milk.prototype.getDesc = function () {
            return this.beverage.getDesc() + this.description;
        };
        return Milk;
    }());
    TheDecoratorPattern.Milk = Milk;
    var Mocha = /** @class */ (function () {
        function Mocha(beverage) {
            this.beverage = beverage;
            this.description = ", Mocha";
        }
        Mocha.prototype.cost = function () {
            return this.beverage.cost() + 0.25;
        };
        Mocha.prototype.getDesc = function () {
            return this.beverage.getDesc() + this.description;
        };
        return Mocha;
    }());
    TheDecoratorPattern.Mocha = Mocha;
})(TheDecoratorPattern || (TheDecoratorPattern = {}));
var beverage = new TheDecoratorPattern.DarkRoast();
beverage = new TheDecoratorPattern.Mocha(beverage);
beverage = new TheDecoratorPattern.Mocha(beverage);
beverage = new TheDecoratorPattern.Milk(beverage);
beverage = new TheDecoratorPattern.Whip(beverage);
console.log(beverage.getDesc() + " - $" + beverage.cost());
