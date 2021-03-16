namespace TheAdapterPatternChallenge {

    export class DuckSimulator {
        // This function is for simulating Java :D
        static main(args: String[]): void {
            var duck: Duck = new MallardDuck();
            this.testDuck(duck);

            var drone = new SuperDrone();
            var droneAdapter: Duck = new DroneAdapter(drone);
            this.testDuck(droneAdapter);
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

    interface Drone {
        beep(): void;
        spinRotors(): void;
        takeOff(): void;
    }

    class SuperDrone implements Drone {
        beep(): void {
            console.log("beep beep beep");
        }

        spinRotors(): void {
            console.log("rotors are spinning");
        }

        takeOff(): void {
            console.log("taking off");
        }
    }

    class DroneAdapter implements Duck {
        drone: Drone;
        constructor(drone: Drone) { this.drone = drone }

        quack(): void {
            this.drone.beep();
        }

        fly(): void {
            this.drone.spinRotors();
            this.drone.takeOff();
        }
    }
}