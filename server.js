const express = require('express');
const app = express();

app.use('/', require('./routes/contacts'));

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listenting at port '+ (process.env.port || port))