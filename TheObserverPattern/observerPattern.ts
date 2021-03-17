// The Observer Pattern
/*
    This pattern defines a one-to-many dependency between objects so that when
    one object changes state, all of its dependents are notified and updated automatically.
 */

namespace TheObserverPattern {

    export class SimpleSubject implements Subject {
        private observers: Observer[];
        private _value: number = 0;

        get value(): number {
            return this._value;
        }

        set value(newValue: number) {
            this._value = newValue;
            this.notifyObservers(newValue);
        }

        constructor() {
            this.observers = [];
        }

        registerObserver(o: Observer): void {
            this.observers.push(o);
        }

        removeObserver(o: Observer): void {
            this.observers = this.observers.filter(el => el == o);
        }

        notifyObservers(newValue: number): void {
            this.observers.forEach(element => {
                element.update(newValue);
            });
        }
    }

    export class SimpleObserver implements Observer {
        private value: number;
        private simpleSubject: Subject;

        constructor(simpleSubject: Subject) {
            this.simpleSubject = simpleSubject;
            simpleSubject.registerObserver(this);
        }

        update(newValue: number): void {
            this.value = newValue;
        }

        display(): void {
            console.log(`Value: ${this.value}`);
        }
    }

    interface Subject {
        registerObserver(o: Observer): void;
        removeObserver(o: Observer): void;
        notifyObservers(newValue: number): void;
    }

    interface Observer {
        update(newValue: number): void;
    }
}