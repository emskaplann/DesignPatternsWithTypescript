// The Iterator Pattern
/*
    This pattern provides a way to access the elements of an
    aggregate object sequentially without exposing its underlying
    representation.
 */
var TheIteratorPattern;
(function (TheIteratorPattern) {
    var Cafe = /** @class */ (function () {
        function Cafe(pancakeHouseMenu, dinerHouseMenu) {
            this.pancakeHouseMenu = pancakeHouseMenu;
            this.dinerHouseMenu = dinerHouseMenu;
        }
        Cafe.prototype.printMenu = function (iterator) {
            while (iterator.hasNext()) {
                var menuItem = iterator.next();
                console.log(menuItem.getDesc());
            }
        };
        return Cafe;
    }());
    TheIteratorPattern.Cafe = Cafe;
    var PancakeHouseMenu = /** @class */ (function () {
        function PancakeHouseMenu(menuItems) {
            this.menuItems = menuItems;
        }
        PancakeHouseMenu.prototype.createIterator = function () {
            return new PancakeHouseMenuIterator(this.menuItems);
        };
        ;
        return PancakeHouseMenu;
    }());
    TheIteratorPattern.PancakeHouseMenu = PancakeHouseMenu;
    var DinerHouseMenu = /** @class */ (function () {
        function DinerHouseMenu(menuItems) {
            this.menuItems = menuItems;
        }
        DinerHouseMenu.prototype.createIterator = function () {
            return new DinerHouseMenuIterator(this.menuItems);
        };
        ;
        return DinerHouseMenu;
    }());
    TheIteratorPattern.DinerHouseMenu = DinerHouseMenu;
    var PancakeHouseMenuIterator = /** @class */ (function () {
        function PancakeHouseMenuIterator(menuItems) {
            this.menuItems = menuItems;
            this.currentIndex = -1;
        }
        PancakeHouseMenuIterator.prototype.hasNext = function () {
            return this.currentIndex >= this.menuItems.length - 1 ? false : true;
        };
        PancakeHouseMenuIterator.prototype.next = function () {
            if (this.hasNext())
                return this.menuItems[++this.currentIndex];
        };
        return PancakeHouseMenuIterator;
    }());
    TheIteratorPattern.PancakeHouseMenuIterator = PancakeHouseMenuIterator;
    var DinerHouseMenuIterator = /** @class */ (function () {
        function DinerHouseMenuIterator(menuItems) {
            this.menuItems = menuItems;
            this.currentIndex = -1;
        }
        DinerHouseMenuIterator.prototype.hasNext = function () {
            return this.currentIndex >= this.menuItems.length - 1 ? false : true;
        };
        DinerHouseMenuIterator.prototype.next = function () {
            if (this.hasNext())
                return this.menuItems[++this.currentIndex];
        };
        return DinerHouseMenuIterator;
    }());
    TheIteratorPattern.DinerHouseMenuIterator = DinerHouseMenuIterator;
    var Kebab = /** @class */ (function () {
        function Kebab() {
        }
        Kebab.prototype.getDesc = function () {
            return "Kebab";
        };
        return Kebab;
    }());
    TheIteratorPattern.Kebab = Kebab;
    var Soup = /** @class */ (function () {
        function Soup() {
        }
        Soup.prototype.getDesc = function () {
            return "Soup";
        };
        return Soup;
    }());
    TheIteratorPattern.Soup = Soup;
    var Shawarma = /** @class */ (function () {
        function Shawarma() {
        }
        Shawarma.prototype.getDesc = function () {
            return "Shawarma";
        };
        return Shawarma;
    }());
    TheIteratorPattern.Shawarma = Shawarma;
    var Kunefe = /** @class */ (function () {
        function Kunefe() {
        }
        Kunefe.prototype.getDesc = function () {
            return "Kunefe";
        };
        return Kunefe;
    }());
    TheIteratorPattern.Kunefe = Kunefe;
    var Pancake = /** @class */ (function () {
        function Pancake() {
        }
        Pancake.prototype.getDesc = function () {
            return "Pancake";
        };
        return Pancake;
    }());
    TheIteratorPattern.Pancake = Pancake;
    var Coffee = /** @class */ (function () {
        function Coffee() {
        }
        Coffee.prototype.getDesc = function () {
            return "Coffee";
        };
        return Coffee;
    }());
    TheIteratorPattern.Coffee = Coffee;
    var Donut = /** @class */ (function () {
        function Donut() {
        }
        Donut.prototype.getDesc = function () {
            return "Donut";
        };
        return Donut;
    }());
    TheIteratorPattern.Donut = Donut;
})(TheIteratorPattern || (TheIteratorPattern = {}));
// Creating menu items
var kebab = new TheIteratorPattern.Kebab();
var kunefe = new TheIteratorPattern.Kunefe();
var soup = new TheIteratorPattern.Soup();
var shawarma = new TheIteratorPattern.Shawarma();
var dinerHouseMenuItems = [kebab, kunefe, soup, shawarma];
var pancake = new TheIteratorPattern.Pancake();
var coffee = new TheIteratorPattern.Coffee();
var donut = new TheIteratorPattern.Donut();
var pancakeHouseMenuItems = [pancake, donut, coffee];
// Creating the menus with the menu items for the cafe
var dinerHouseMenu = new TheIteratorPattern.DinerHouseMenu(dinerHouseMenuItems);
var pancakeHouseMenu = new TheIteratorPattern.PancakeHouseMenu(pancakeHouseMenuItems);
var istanbulCafe = new TheIteratorPattern.Cafe(pancakeHouseMenu, dinerHouseMenu);
// Print Menu Items with Cafe!
var dinerHouseMenuIterator = istanbulCafe.dinerHouseMenu.createIterator();
istanbulCafe.printMenu(dinerHouseMenuIterator);
