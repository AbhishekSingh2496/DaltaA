const express = require('express');
const app = express();
const path = require('path');

const { storeRouter}= require('./storeRouter');
const { hostRouter } = require('./hostRouter');
const NotFoundRouter = require('./404');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'Public')));

app.use(express.urlencoded({ extended: true }));

app.use(storeRouter);

app.use(hostRouter);

app.use(NotFoundRouter);

const PORT = 30001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});