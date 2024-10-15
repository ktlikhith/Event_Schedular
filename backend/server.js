const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Scheduler = require('./scheduler');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const scheduler = new Scheduler();

// Add a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Daily Event Scheduler API!');
});

app.post('/addEvent', (req, res) => {
    const { start_time, end_time } = req.body;
    const success = scheduler.addEvent({ start_time, end_time });
    res.json({ success });
});

app.get('/events', (req, res) => {
    const events = scheduler.getEvents();
    res.json(events);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
