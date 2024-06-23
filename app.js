const express = require('express');
const app = express();
const port = 8080;
const indexRouter = require('./routes/index')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
