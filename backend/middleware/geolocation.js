const axios = require('axios');

const getGeolocation = async (ipAddress) => {
    try {
        const response = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
        const { data } = response;
        return {
            city: data.city,
            state: data.region,
            country: data.country_name,
            latitude: data.latitude,
            longitude: data.longitude,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
};

module.exports = getGeolocation;
