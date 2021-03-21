var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TheFactoryPatternChallenge;
(function (TheFactoryPatternChallenge) {
    var Zone = /** @class */ (function () {
        function Zone() {
        }
        Zone.prototype.getDisplayName = function () { return this.displayName; };
        Zone.prototype.getOffset = function () { return this.offset; };
        return Zone;
    }());
    TheFactoryPatternChallenge.Zone = Zone;
    var ZoneFactory = /** @class */ (function () {
        function ZoneFactory() {
        }
        ZoneFactory.prototype.createZone = function (zoneId) {
            var zone = null;
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
        };
        return ZoneFactory;
    }());
    TheFactoryPatternChallenge.ZoneFactory = ZoneFactory;
    var Calendar = /** @class */ (function () {
        function Calendar() {
        }
        Calendar.prototype.print = function () {
            console.log("--- " + this.zone.getDisplayName() + " Calendar ---");
            console.log("Offset from GMT: " + this.zone.getOffset());
        };
        return Calendar;
    }());
    TheFactoryPatternChallenge.Calendar = Calendar;
    var PacificCalendar = /** @class */ (function (_super) {
        __extends(PacificCalendar, _super);
        function PacificCalendar(zoneFactory) {
            var _this = _super.call(this) || this;
            _this.zone = zoneFactory.createZone("US/Pacific");
            return _this;
            // make a calendar for the pacific zone
            // ...
        }
        PacificCalendar.prototype.createCalendar = function (appointments) {
            // make calendar from appointments
            console.log("Making the calendar");
        };
        return PacificCalendar;
    }(Calendar));
    TheFactoryPatternChallenge.PacificCalendar = PacificCalendar;
    var ZoneEastern = /** @class */ (function (_super) {
        __extends(ZoneEastern, _super);
        function ZoneEastern() {
            var _this = _super.call(this) || this;
            _this.displayName = "US/Eastern";
            _this.offset = -5;
            return _this;
        }
        return ZoneEastern;
    }(Zone));
    var ZoneCentral = /** @class */ (function (_super) {
        __extends(ZoneCentral, _super);
        function ZoneCentral() {
            var _this = _super.call(this) || this;
            _this.displayName = "US/Central";
            _this.offset = -6;
            return _this;
        }
        return ZoneCentral;
    }(Zone));
    var ZoneMountain = /** @class */ (function (_super) {
        __extends(ZoneMountain, _super);
        function ZoneMountain() {
            var _this = _super.call(this) || this;
            _this.displayName = "US/Mountain";
            _this.offset = -7;
            return _this;
        }
        return ZoneMountain;
    }(Zone));
    var ZonePacific = /** @class */ (function (_super) {
        __extends(ZonePacific, _super);
        function ZonePacific() {
            var _this = _super.call(this) || this;
            _this.displayName = "US/Pacific";
            _this.offset = -8;
            return _this;
        }
        return ZonePacific;
    }(Zone));
})(TheFactoryPatternChallenge || (TheFactoryPatternChallenge = {}));
var zoneFactory = new TheFactoryPatternChallenge.ZoneFactory();
var calendar = new TheFactoryPatternChallenge.PacificCalendar(zoneFactory);
var appts = ["appt 1", "appt 2"];
calendar.createCalendar(appts);
calendar.print();
