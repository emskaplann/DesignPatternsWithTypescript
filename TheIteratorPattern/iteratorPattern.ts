// The Iterator Pattern
/*
    This pattern provides a way to access the elements of an
    aggregate object sequentially without exposing its underlying
    representation.
 */

namespace TheIteratorPattern {

    export class Cafe {
        pancakeHouseMenu: Menu<MenuItem>;
        dinerHouseMenu: Menu<MenuItem>;

        constructor(pancakeHouseMenu: Menu<MenuItem>, dinerHouseMenu: Menu<MenuItem>) {
            this.pancakeHouseMenu = pancakeHouseMenu;
            this.dinerHouseMenu = dinerHouseMenu;
        }

        printMenu(iterator: Iterator<MenuItem>) {
            while (iterator.hasNext()) {
                let menuItem: MenuItem = iterator.next();
                console.log(menuItem.getDesc());
            }
        }
    }

    export interface Iterator<T> {
        hasNext(): boolean;
        next(): T;
    }

    export interface Menu<T> {
        createIterator(): Iterator<T>;
    }

    export interface MenuItem {
        getDesc(): string;
    }

    export class PancakeHouseMenu implements Menu<MenuItem> {
        menuItems: MenuItem[];
        constructor(menuItems: MenuItem[]) { this.menuItems = menuItems }

        createIterator(): Iterator<MenuItem> {
            return new PancakeHouseMenuIterator(this.menuItems);
        };
    }

    export class DinerHouseMenu implements Menu<MenuItem> {
        menuItems: MenuItem[];
        constructor(menuItems: MenuItem[]) { this.menuItems = menuItems }

        createIterator(): Iterator<MenuItem> {
            return new DinerHouseMenuIterator(this.menuItems);
        };
    }

    export class PancakeHouseMenuIterator implements Iterator<MenuItem> {
        private menuItems: MenuItem[];
        private currentIndex: number;

        constructor(menuItems: MenuItem[]) { this.menuItems = menuItems; this.currentIndex = -1; }

        hasNext(): boolean {
            return this.currentIndex >= this.menuItems.length - 1 ? false : true;
        }

        next(): MenuItem {
            if (this.hasNext()) return this.menuItems[++this.currentIndex];
        }
    }

    export class DinerHouseMenuIterator implements Iterator<MenuItem> {
        private menuItems: MenuItem[];
        private currentIndex: number;

        constructor(menuItems: MenuItem[]) { this.menuItems = menuItems; this.currentIndex = -1; }

        hasNext(): boolean {
            return this.currentIndex >= this.menuItems.length - 1 ? false : true;
        }

        next(): MenuItem {
            if (this.hasNext()) return this.menuItems[++this.currentIndex];
        }
    }

    export class Kebab implements MenuItem {
        getDesc(): string {
            return "Kebab";
        }
    }

    export class Soup implements MenuItem {
        getDesc(): string {
            return "Soup";
        }
    }

    export class Shawarma implements MenuItem {
        getDesc(): string {
            return "Shawarma";
        }
    }

    export class Kunefe implements MenuItem {
        getDesc(): string {
            return "Kunefe";
        }
    }

    export class Pancake implements MenuItem {
        getDesc(): string {
            return "Pancake";
        }
    }

    export class Coffee implements MenuItem {
        getDesc(): string {
            return "Coffee";
        }
    }

    export class Donut implements MenuItem {
        getDesc(): string {
            return "Donut";
        }
    }
}

// Creating menu items
let kebab: TheIteratorPattern.MenuItem = new TheIteratorPattern.Kebab();
let kunefe: TheIteratorPattern.MenuItem = new TheIteratorPattern.Kunefe();
let soup: TheIteratorPattern.MenuItem = new TheIteratorPattern.Soup();
let shawarma: TheIteratorPattern.MenuItem = new TheIteratorPattern.Shawarma();

let dinerHouseMenuItems: TheIteratorPattern.MenuItem[] = [kebab, kunefe, soup, shawarma];

let pancake: TheIteratorPattern.MenuItem = new TheIteratorPattern.Pancake();
let coffee: TheIteratorPattern.MenuItem = new TheIteratorPattern.Coffee();
let donut: TheIteratorPattern.MenuItem = new TheIteratorPattern.Donut();

let pancakeHouseMenuItems: TheIteratorPattern.MenuItem[] = [pancake, donut, coffee];

// Creating the menus with the menu items for the cafe
let dinerHouseMenu: TheIteratorPattern.DinerHouseMenu = new TheIteratorPattern.DinerHouseMenu(dinerHouseMenuItems);
let pancakeHouseMenu: TheIteratorPattern.PancakeHouseMenu = new TheIteratorPattern.PancakeHouseMenu(pancakeHouseMenuItems);

let istanbulCafe: TheIteratorPattern.Cafe = new TheIteratorPattern.Cafe(pancakeHouseMenu, dinerHouseMenu);

// Print Menu Items with Cafe!
let dinerHouseMenuIterator: TheIteratorPattern.Iterator<TheIteratorPattern.MenuItem> = istanbulCafe.dinerHouseMenu.createIterator();

istanbulCafe.printMenu(dinerHouseMenuIterator);