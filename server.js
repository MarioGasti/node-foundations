const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/router');


const app = express();
const port = process.env.PORT || 3100;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(port, err => {
    if (err) throw new Error(err);
    console.log(`Server running at ${port}.`);
});