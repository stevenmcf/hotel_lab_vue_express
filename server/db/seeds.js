const { Db } = require("mongodb");

use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        firstName: "Jim",
        lastName: "Jardashian",
        email: "jj@jardashian.com",
        checkedIn: false
    },
    {
        firstName: "Eddie",
        lastName:  "Vedder",
        email: "eddie@pearljam.com",
        checkedIn: false 
    },
    {
        firstName: "Diego",
        lastName: "Maradona",
        email: "diego@coke.com",
        checkedIn: false
    },
    {
        firstName: "Graham",
        lastName: "Grahamson",
        email: "grahamgrahamson@grahamgrahamson.com",
        checkedIn: true
    }
]);