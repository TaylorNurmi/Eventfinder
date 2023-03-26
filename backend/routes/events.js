const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const getGeolocation = require('../middleware/geolocation');
const requestIp = require('request-ip');

dotenv.config();

const router = express.Router();

router.get('/search', async (req, res) => {
    const { q } = req.query;
    
    try {
        const ipAddress = requestIp.getClientIp(req);
        const geolocation = await getGeolocation(ipAddress);
        console.log(geolocation);

        const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
            params: {
                keyword: q,
                apikey: process.env.TICKETMASTER_API_KEY,
                city: geolocation.city,
                startDateTime: new Date().toISOString().slice(0,19)+'Z',
            },
        });
        res.json(response.data);
    } 
    catch (error) {
        console.error(error.response.data);
        res.status(500).json({ message: 'Error fetching events from Ticketmaster API' });
    }
});

module.exports = router;
