require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./routes');

const hbs = exphbs.create({});

const sequelize = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sessionConfig = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
};

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session(sessionConfig));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});
