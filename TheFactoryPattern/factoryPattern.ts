// The Factory Pattern
/*
    The Factory Method pattern defines an interface for creating an object,
    but lets subclasses decide which class to instantiate. Factory Method 
    lets a class defer instantiation to subclasses.
*/

namespace TheFactoryPattern {
    
    interface PizzaFactory {
        createPizza(type: string): Pizza;
    }

    export abstract class PizzaStore {
        abstract pizzaFactory: PizzaFactory;

        public orderPizza(type: string): Pizza {
            let pizza: Pizza = this.pizzaFactory.createPizza(type);
            
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
            
            return pizza;
        }
    }

    export interface Pizza {
        prepare(): void;
        bake(): void;
        cut(): void;
        box(): void;
    }

    class ChicagoStylePizzaFactory implements PizzaFactory {
        createPizza(type: string): Pizza {
            if (type.toLowerCase() == "cheese") return new ChicagoStyleCheesePizza();
            else if (type.toLowerCase() == "veggie") return new ChicagoStyleVeggiePizza();
            else console.log("no pizza in that type!");
        }
    }

    class NYStylePizzaFactory implements PizzaFactory {
        createPizza(type: string): Pizza {
            if (type.toLowerCase() == "cheese") return new NYStyleCheesePizza();
            else if (type.toLowerCase() == "veggie") return new NYStyleVeggiePizza();
            else console.log("no pizza in that type!");
        }
    }

    export class ChicagoStylePizzaStore extends PizzaStore {
        pizzaFactory: PizzaFactory;
        constructor() { super(); this.pizzaFactory = new ChicagoStylePizzaFactory(); }
    }

    export class NYStylePizzaStore extends PizzaStore {
        pizzaFactory: PizzaFactory;
        constructor() { super(); this.pizzaFactory = new NYStylePizzaFactory(); }
    }

    class ChicagoStyleCheesePizza implements Pizza {
        name: string;

        constructor() { this.name = "ChicagoStyleCheesePizza"; }
        
        prepare(): void {
            console.log(`preparing ${this.name}`)
        };
        bake(): void  {
            console.log(`baking ${this.name}`)
        };
        cut(): void  {
            console.log(`cutting ${this.name}`)
        };
        box(): void  {
            console.log(`boxing ${this.name}`)
        };
    }
    
    class NYStyleCheesePizza implements Pizza {
        name: string;

        constructor() { this.name = "NYStyleCheesePizza"; }
        
        prepare(): void {
            console.log(`preparing ${this.name}`)
        };
        bake(): void  {
            console.log(`baking ${this.name}`)
        };
        cut(): void  {
            console.log(`cutting ${this.name}`)
        };
        box(): void  {
            console.log(`boxing ${this.name}`)
        };
    }

    class ChicagoStyleVeggiePizza implements Pizza {
        name: string;

        constructor() { this.name = "ChicagoStyleVeggiePizza"; }
        
        prepare(): void {
            console.log(`preparing ${this.name}`)
        };
        bake(): void  {
            console.log(`baking ${this.name}`)
        };
        cut(): void  {
            console.log(`cutting ${this.name}`)
        };
        box(): void  {
            console.log(`boxing ${this.name}`)
        };
    }

    class NYStyleVeggiePizza implements Pizza {
        name: string;

        constructor() { this.name = "NYStyleVeggiePizza"; }
        
        prepare(): void {
            console.log(`preparing ${this.name}`)
        };
        bake(): void  {
            console.log(`baking ${this.name}`)
        };
        cut(): void  {
            console.log(`cutting ${this.name}`)
        };
        box(): void  {
            console.log(`boxing ${this.name}`)
        };
    }
}

let nyPizzaStore: TheFactoryPattern.PizzaStore = new TheFactoryPattern.NYStylePizzaStore();
let chicagoPizzaStore: TheFactoryPattern.PizzaStore = new TheFactoryPattern.ChicagoStylePizzaStore();

let nyCheesePizza: TheFactoryPattern.Pizza = nyPizzaStore.orderPizza("cheese");
let chicagoVeggiePizza: TheFactoryPattern.Pizza = chicagoPizzaStore.orderPizza("veggie");