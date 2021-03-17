namespace TheObserverPatternChallenge {
    export class WeatherStation implements WeatherStationAbstract {
        _temperature: number;
        _windSpeed: number;
        _pressure: number;
        observers: Observer[];

        get temperature(): number {
            return this._temperature;
        }
        set temperature(newTemp: number) {
            this._temperature = newTemp;
            this.notifyObservers();
        }

        get windSpeed(): number {
            return this.windSpeed;
        }
        set windSpeed(newWindSpeed: number) {
            this._windSpeed = newWindSpeed;
            this.notifyObservers();
        }

        get pressure(): number {
            return this.pressure;
        }
        set pressure(newPressure: number) {
            this._pressure = newPressure;
            this.notifyObservers();
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

        notifyObservers(): void {
            this.observers.forEach(element => {
                element.update();
            });
        }
    }

    export class UserInterface implements Observer {
        weatherStation: WeatherStationAbstract;
        constructor(weatherStation: WeatherStationAbstract) { this.weatherStation = weatherStation }

        update(): void {
            // Display with new values when notified
            this.display();
        }

        display(): void {
            console.log("UserInterface.display()")
            console.log(
                `.: Today's weather :.
                Temperature: ${this.weatherStation.temperature}\n
                Wind Speed: ${this.weatherStation.windSpeed}\n
                Pressure: ${this.weatherStation.pressure}\n`
            )
        }
    }

    export class Logger implements Observer {
        weatherStation: WeatherStationAbstract;
        constructor(weatherStation: WeatherStationAbstract) { this.weatherStation = weatherStation }

        update(): void {
            // Log with new values when notified
            this.log();
        }

        log(): void {
            // Instead of console log we could write to a file to save the logs
            // but this example fictional :)
            console.log("Logger.log()")
            console.log(
                `.: Today's weather :.
                Temperature: ${this.weatherStation.temperature}\n
                Wind Speed: ${this.weatherStation.windSpeed}\n
                Pressure: ${this.weatherStation.pressure}\n`
            )
        }
    }

    export class Alert implements Observer {
        weatherStation: WeatherStationAbstract;
        constructor(weatherStation: WeatherStationAbstract) { this.weatherStation = weatherStation }

        update(): void {
            // Log with new values when notified
            this.alert();
        }

        alert(): void {
            // Instead of console log we could send an email to alert
            // but this example is fictional :)
            console.log("Alert.alert()")
            console.log(
                `.: Today's weather :.
                Temperature: ${this.weatherStation.temperature}\n
                Wind Speed: ${this.weatherStation.windSpeed}\n
                Pressure: ${this.weatherStation.pressure}\n`
            )
        }
    }

    abstract class WeatherStationAbstract implements Subject {
        temperature: number;
        windSpeed: number;
        pressure: number;

        abstract registerObserver(o: Observer): void;
        abstract removeObserver(o: Observer): void;
        abstract notifyObservers(): void;
    }

    interface Subject {
        registerObserver(o: Observer): void;
        removeObserver(o: Observer): void;
        notifyObservers(): void;
    }

    interface Observer {
        update(): void;
    }
}