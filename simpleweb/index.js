const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello world NODEJS -> From Mathias!!!')
});

app.listen(8080, () => {
    console.log(`Listening on port: ${8080}`);
});
