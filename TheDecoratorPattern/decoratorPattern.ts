// The Decorator Pattern
/*
   This pattern attaches additional resposibilities to an
   object dynamically. Decorators provide a flexible alternative to
   subclassing for extending functionality.
*/

namespace TheDecoratorPattern {

    export abstract class Beverage {
        description: string;

        abstract cost(): number;
        abstract getDesc(): string;
    }

    export class DarkRoast implements Beverage {
        description: string;
        constructor() { this.description = "Dark Roast Coffee"; }

        cost(): number {
            return 0.99;
        }

        getDesc(): string {
            return this.description;
        }
    }

    export abstract class CondimentDecorator implements Beverage {
        description: string;

        abstract cost(): number;
        abstract getDesc(): string;
    }

    export class Whip implements CondimentDecorator {
        beverage: Beverage;
        description: string;
        constructor(beverage: Beverage) { this.beverage = beverage; this.description = ", Whip"; }

        cost(): number {
            return this.beverage.cost() + 0.10;
        }

        getDesc(): string {
            return this.beverage.getDesc() + this.description;
        }
    }

    export class Milk implements CondimentDecorator {
        beverage: Beverage;
        description: string;
        constructor(beverage: Beverage) { this.beverage = beverage; this.description = ", Milk"; }

        cost(): number {
            return this.beverage.cost() + 0.20;
        }

        getDesc(): string {
            return this.beverage.getDesc() + this.description;
        }
    }

    export class Mocha implements CondimentDecorator {
        beverage: Beverage;
        description: string;
        constructor(beverage: Beverage) { this.beverage = beverage; this.description = ", Mocha"; }

        cost(): number {
            return this.beverage.cost() + 0.25;
        }

        getDesc(): string {
            return this.beverage.getDesc() + this.description;
        }
    }
}

var beverage: TheDecoratorPattern.Beverage = new TheDecoratorPattern.DarkRoast();
beverage = new TheDecoratorPattern.Mocha(beverage);
beverage = new TheDecoratorPattern.Mocha(beverage);
beverage = new TheDecoratorPattern.Milk(beverage);
beverage = new TheDecoratorPattern.Whip(beverage);

console.log(beverage.getDesc() + " - $" + beverage.cost());