const express = require('express');
const routes = require('./routes/member');
require('dotenv').config();

const app = express();

app.listen(5000, function() {
    console.log('The server is started on port 5000 !')
})

const dbConnect = require('./dbConfig');
dbConnect();

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
app.use('/database', routes)

module.exports = app;
    
  

