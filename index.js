const { response } = require('express');
const express = require('express');
const bodyParser = require("body-parser");
const userRoute = require('./routes/users')
const app = express();
const port = process.env.PORT || 40411

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.use('/', userRoute)

app.listen(port, () => {
    console.log(`app started at http://localhost:${port}`);
})