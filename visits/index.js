const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const redisClient = redis.createClient({
    host: 'redis-server',
    port: 6379
});
redisClient.set('visits', 0);

app.get('/', async (req, res) => {
    process.exit(400);
    redisClient.get('visits', (error, visits) => {
        res.send(`Number of visits is: ${visits}`);
        redisClient.set('visits', parseInt(visits) + 1);
    });
});

const portNumber = 8080
app.listen(portNumber, () => {
    console.log(`Listening on port: ${portNumber}`);
});
