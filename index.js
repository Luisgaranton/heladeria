const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var sabores = [];


app.get('/sabores/lista', (req, res) => {
  res.json(sabores);
})

app.post('/sabores', (req, res) => {
  let sabor = req.body.sabor
  sabores.push(sabor);
  res.json({"mensaje": 'se guardo en la base de datos'})
})

app.delete('/sabores', (req, res) => {
  res.send('guardar sabores');
})

app.put('/sabores', (req, res) => {
  res.send('modificar o actualizar sabores');
})

app.get('')
app.listen(port, () => {
  console.log('mi port' + port);
});
