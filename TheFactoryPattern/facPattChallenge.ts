namespace TheFactoryPatternChallenge {
    export class Zone {
        displayName: string;
        offset: number;
        public getDisplayName(): String { return this.displayName; }
        public getOffset(): number { return this.offset; }
    }

    export class ZoneFactory {
        createZone(zoneId: string): Zone {
            let zone: Zone = null;
            if (zoneId == "US/Pacific") {
                zone = new ZonePacific();
            }
            else if (zoneId == "US/Mountain") {
                zone = new ZoneMountain();
            }
            else if (zoneId == "US/Central") {
                zone = new ZoneCentral();
            }
            else if (zoneId == "US/Eastern") {
                zone = new ZoneEastern();
            }
            return zone;
        }
    }

    export abstract class Calendar {
        zone: Zone;

        print(): void {
            console.log("--- " + this.zone.getDisplayName() + " Calendar ---");
            console.log("Offset from GMT: " + this.zone.getOffset());
        }

        public abstract createCalendar(appointments: string[]): void;
    }

    export class PacificCalendar extends Calendar {
        zone: Zone;

        constructor(zoneFactory: ZoneFactory) {
            super();
            this.zone = zoneFactory.createZone("US/Pacific");
            // make a calendar for the pacific zone
            // ...
        }
        public createCalendar(appointments: string[]): void {
            // make calendar from appointments
            console.log("Making the calendar");
        }
    }

    class ZoneEastern extends Zone {
        displayName: string;
        offset: number;

        constructor() {
            super();
            this.displayName = "US/Eastern";
            this.offset = -5;
        }
    }

    class ZoneCentral extends Zone {
        displayName: string;
        offset: number;

        constructor() {
            super();
            this.displayName = "US/Central";
            this.offset = -6;
        }
    }

    class ZoneMountain extends Zone {
        displayName: string;
        offset: number;

        constructor() {
            super();
            this.displayName = "US/Mountain";
            this.offset = -7;
        }
    }

    class ZonePacific extends Zone {
        displayName: string;
        offset: number;

        constructor() {
            super();
            this.displayName = "US/Pacific";
            this.offset = -8;
        }
    }
}

let zoneFactory: TheFactoryPatternChallenge.ZoneFactory = new TheFactoryPatternChallenge.ZoneFactory();
let calendar: TheFactoryPatternChallenge.Calendar = new TheFactoryPatternChallenge.PacificCalendar(zoneFactory);
let  appts: string[] = ["appt 1", "appt 2"];
calendar.createCalendar(appts);
calendar.print();