// The Strategy Pattern
/*
    This pattern defines a family of algorithms, encapsulates each one, and makes them
    interchangeable. This lets the algorithm vary idependently from clients that use it.
*/

namespace TheStrategyPattern {
    export abstract class Duck {
        private flyBehavior: FlyBehavior;
        private quackBehavior: QuackBehavior;

        constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
            this.flyBehavior = flyBehavior;
            this.quackBehavior = quackBehavior;
        }

        public performFly(): void {
            this.flyBehavior.fly();
        }

        public performQuack(): void {
            this.quackBehavior.quack();
        }

        swim(): void {
            console.log("swimming...");
        }

        abstract display(): void;
    }

    export class MallardDuck extends Duck {
        constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) { super(flyBehavior, quackBehavior) };

        display(): void {
            console.log("displaying myself...");
        }
    }

    interface QuackBehavior {
        quack(): void;
    }

    export class Quack {
        quack(): void {
            console.log("quacking!");
        }
    }

    class Mute {
        quack(): void {
            console.log("I can't speak!");
        }
    }

    class Squeak {
        quack(): void {
            console.log("squeaking!");
        }
    }

    interface FlyBehavior {
        fly(): void;
    }

    export class FlyWithWings implements FlyBehavior {
        fly(): void {
            console.log("Flying with wings...");
        }
    }

    export class FlyNoWay implements FlyBehavior {
        fly(): void {
            console.log("I can't fly...");
        }
    }
}

var mallardDuck: TheStrategyPattern.Duck = new TheStrategyPattern.MallardDuck(new TheStrategyPattern.FlyWithWings(), new TheStrategyPattern.Quack());
mallardDuck.performFly();
mallardDuck.swim();