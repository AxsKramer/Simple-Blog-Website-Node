const path = require('path');
const express = require('express');
const router = require('./routes');
const mongoose= require('mongoose');
const app = express();


const port = process.env.PORT || 4000;

mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.set('templa')

app.use('/', router);



app.listen(port, () => console.log('Server running on port: ', port));