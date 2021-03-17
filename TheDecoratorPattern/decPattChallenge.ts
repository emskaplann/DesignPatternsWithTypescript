namespace TheDecoratorPatternChallenge {
    export interface Pizza {
        getDesc(): string;
        cost(): number;
    }

    export abstract class Topping implements Pizza {
        pizza: Pizza;
        abstract getDesc(): string;
        abstract cost(): number;
    }

    export class ThinCrustPizza implements Pizza {
        getDesc() {
            return "Thin crust pizza";
        }

        cost() {
            return 10.99;
        }
    }

    export class ThickCrustPizza implements Pizza {
        getDesc() {
            return "Thick crust pizza";
        }

        cost() {
            return 10.99;
        }
    }

    export class Cheese implements Topping {
        pizza: Pizza;
        constructor(pizza: Pizza) { this.pizza = pizza; }

        getDesc() {
            return this.pizza.getDesc() + ", Cheese";
        }

        cost() {
            return this.pizza.cost() + 1.99;
        }
    }

    export class Olive implements Topping {
        pizza: Pizza;
        constructor(pizza: Pizza) { this.pizza = pizza; }

        getDesc() {
            return this.pizza.getDesc() + ", Olive";
        }

        cost() {
            return this.pizza.cost() + 1.49;
        }
    }

    export class Pepper implements Topping {
        pizza: Pizza;
        constructor(pizza: Pizza) { this.pizza = pizza; }

        getDesc() {
            return this.pizza.getDesc() + ", Pepper";
        }

        cost() {
            return this.pizza.cost() + 1.49;
        }
    }
}

var pizza: TheDecoratorPatternChallenge.Pizza = new TheDecoratorPatternChallenge.ThickCrustPizza();
pizza = new TheDecoratorPatternChallenge.Cheese(pizza);
pizza = new TheDecoratorPatternChallenge.Olive(pizza);
pizza = new TheDecoratorPatternChallenge.Pepper(pizza);

console.log(pizza.getDesc() + " - $" + pizza.cost())