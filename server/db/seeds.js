const { Db } = require("mongodb");

use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Jim Jardashian",
        email: "JJ@Jardashian.com",
        checkedIn: false
    },
    {
        name: "Eddie Vedder",
        email: "Eddie@pearljam.com",
        checkedIn: false 
    },
    {
        name: "Diego Maradona",
        email: "diego@coke.com",
        checkedIn: false
    }
]);