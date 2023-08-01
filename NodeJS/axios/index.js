import axios from 'axios';
import dotenv from 'dotenv';

const cep = '57035-400';
const url = `https://viacep.com.br/ws/${cep}/json/`;

const response1 = await axios.get(url, {
    // We can add more configurations in this object: headers, params, etc.
});

console.log(response1.data);

const response2 = await axios({
    method: 'get',
    url: url,
    // We can add more configurations in this object: headers, params, etc.
});
 
console.log(response2.data);

dotenv.config();
const apiKey = process.env.API_KEY;
console.log(apiKey);

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather`

const weather = await axios({
    method: 'get',
    url: weatherUrl,
    params: {
        appid: apiKey,
        lat: -9.649849,
        lon: -35.708950
    }
});

console.log(weather);