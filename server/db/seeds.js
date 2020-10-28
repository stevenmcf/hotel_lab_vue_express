const { Db } = require("mongodb");

use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Jim Jardashian",
        email: "jj@jardashian.com",
        checkedIn: false
    },
    {
        name: "Eddie Vedder",
        email: "eddie@pearljam.com",
        checkedIn: false 
    },
    {
        name: "Diego Maradona",
        email: "diego@coke.com",
        checkedIn: false
    },
    {
        name: "Graham Grahamson",
        email: "grahamgrahamson@grahamgrahamson.com",
        checkedIn: true
    }
]);