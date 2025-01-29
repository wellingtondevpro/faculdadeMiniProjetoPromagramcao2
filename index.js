const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.get("/", routes);

app.use((req, res) => {
    res.status(404).render('404');
})


