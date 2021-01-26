const { text } = require('express');
const express = require('express');
const app = express(); //Esto ya nos permite usar express como lo deseemos.

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public')); //Carpeta de paginas con dominio publico
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


/* Se crea esta variable para obtener el puerto que nos dará HEROKU como servidor*/
const port = process.env.PORT || 3000;

app.get('/', (req, res) => { //Estamos configurando una solicitud Get cuando el Path sea un 'Slash'


    res.render('home', {
        nombre: 'David',
        anio: new Date().getFullYear()
    }); // la funcion send va a detectar quee s un objeto.
});

app.get('/about', (req, res) => { //Estamos configurando una solicitud Get cuando el Path sea un 'Slash'


    res.render('about', {
        anio: new Date().getFullYear()
    }); // la funcion send va a detectar quee s un objeto.
});



//TENER CIUDADO CON MEZCLAR DENTRO DEL MISMO ARCHIVO UN APP.GET CON UN APP.USE
/*app.get('/', (req, res) => { //Estamos configurando una solicitud Get cuando el Path sea un 'Slash'
    //res.send('Hola Mundo');

    let salida = {
        nombre: 'David',
        edad: 25,
        url: req.url
    }
    res.send(salida); // la funcion send va a detectar quee s un objeto.
});*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});