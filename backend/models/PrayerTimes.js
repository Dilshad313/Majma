// models/PrayerTimes.js
const mongoose = require('mongoose');

class PrayerTimes {
    constructor(id, date, fajr, sunrise, dhuhr, asr, maghrib, isha) {
        this.id = id;
        this.date = date;
        this.fajr = fajr;
        this.sunrise = sunrise;
        this.dhuhr = dhuhr;
        this.asr = asr;
        this.maghrib = maghrib;
        this.isha = isha;
        this.jamahTimes = {};
        this.specialAnnouncements = [];
        this.lastUpdated = new Date();
    }

    static create(date, fajr, sunrise, dhuhr, asr, maghrib, isha) {
        return new PrayerTimes(
            Date.now().toString(),
            date,
            fajr,
            sunrise,
            dhuhr,
            asr,
            maghrib,
            isha
        );
    }

    setJamahTime(prayer, time) {
        this.jamahTimes[prayer] = time;
        this.lastUpdated = new Date();
    }

    addAnnouncement(announcement) {
        this.specialAnnouncements.push({
            message: announcement,
            date: new Date()
        });
        this.lastUpdated = new Date();
    }

    getNextPrayer() {
        const now = new Date();
        const prayers = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
        
        for (let prayer of prayers) {
            const prayerTime = new Date(`${this.date}T${this[prayer]}`);
            if (prayerTime > now) {
                return {
                    name: prayer,
                    time: this[prayer],
                    jamahTime: this.jamahTimes[prayer]
                };
            }
        }
        return null;
    }

    toJSON() {
        return {
            id: this.id,
            date: this.date,
            fajr: this.fajr,
            sunrise: this.sunrise,
            dhuhr: this.dhuhr,
            asr: this.asr,
            maghrib: this.maghrib,
            isha: this.isha,
            jamahTimes: this.jamahTimes,
            specialAnnouncements: this.specialAnnouncements,
            lastUpdated: this.lastUpdated
        };
    }
}

module.exports = PrayerTimes;
