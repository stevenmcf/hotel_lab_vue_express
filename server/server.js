const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('hotel');
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingscollection);
    app.use('/api/bookings', bookingsRouter);
    })
    .catch(console.err);

app.listen(3000,function () {
    console.log(`Listening on port ${ this.address().port }`);
})