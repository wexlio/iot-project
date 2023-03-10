const express = require('express')
const cors = require('cors')
const passport = require('passport')
const morgan = require('morgan')
const bodyParser = require('body-parser');

const app = express()

app.use(morgan("dev"));
app.use(cors())
app.use(bodyParser.json());

//Global variables
app.use((req, res, next) => {
    app.locals.data = req.data
    next()
})

global.datos = {
    title: "Sensor Apagado",
    description: "Sin datos",
};


global.led = {
    led: false
}

app.set("port", process.env.PORT || 8080);

app.use(require("./routes/routesIndex"));


app.listen(app.get('port'), console.log('Escuchando el puerto ', app.get('port')))