const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var basededatos_sabores = [];//arreglo de sabores


app.get('/sabores/lista', (req, res) => {
  res.json(basededatos_sabores);
})

app.post('/sabores', (req, res) => {
  let sabor = req.body.sabor
  basededatos_sabores.push(sabor);
  res.json({"mensaje": 'se guardo en la base de datos'})
})

app.delete('/sabores', (req, res) => {
  console.log("req body", req.body);
  let sabor = req.body.sabor
  console.log("variable sabor", sabor);
  var mensaje = "se borro el sabor especificado";
  if (basededatos_sabores.length >= 1){
    var idx = basededatos_sabores.indexOf(sabor);
    console.log("indice", idx);
    if(idx != -1) {
      basededatos_sabores = basededatos_sabores.slice(idx-1, idx)
    }else{
      mensaje = " no se encontro la info";
    }
  }else {
    mensaje = " no se encontro la info";
  }
  res.json({"mensaje": mensaje});
})

app.put('/sabores', (req, res) => {
  res.send('modificar o actualizar sabores');
})

app.get('')
app.listen(port, () => {
  console.log('mi port' + port);
});
