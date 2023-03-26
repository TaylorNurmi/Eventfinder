const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const eventsRoutes = require('./routes/events');

app.use(cors());
app.use(express.json());
app.use('/api/events', eventsRoutes);

app.get('/', (req, res) => {
    res.send('EventFinder API');
});

connectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
