// The Adapter Pattern
/*
    This pattern converts the interface of a class into another interface that clients expect.
    It allows classes to work together that couldn't otherwise because of incompatible interfaces.
 */

namespace TheAdapterPattern {

    export class DuckSimulator {
        // This function is for simulating Java :D
        static main(args: String[]): void {
            var duck: Duck = new MallardDuck();
            this.testDuck(duck);

            var turkey = new WildTurkey();
            var turkeyAdapter: Duck = new TurkeyAdapter(turkey);
            this.testDuck(turkeyAdapter);
        }

        static testDuck(duck: Duck) {
            duck.quack(); duck.fly();
        }
    }

    interface Duck {
        quack(): void;
        fly(): void;
    }

    class MallardDuck implements Duck {
        quack(): void {
            console.log("quacking!");
        }

        fly(): void {
            console.log("flying!");
        }
    }

    interface Turkey {
        gobble(): void;
        fly(): void;
    }

    class WildTurkey implements Turkey {
        gobble(): void {
            console.log("gobbling...");
        }

        fly(): void {
            console.log("flying...");
        }
    }

    class TurkeyAdapter implements Duck {
        turkey: Turkey;
        constructor(turkey: Turkey) { this.turkey = turkey }

        quack(): void {
            this.turkey.gobble();
        }

        fly(): void {
            for (var i = 0; i < 5; i++) {
                this.turkey.fly();
            }
        }
    }
}