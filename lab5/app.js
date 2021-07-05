const express = require('express');
const productRouter = require('./routes/productRouter');

const app = express();

app.use(express.json);

app.use(productRouter);


app.listen(3000, ()=>console.log('The server is on 3000'));