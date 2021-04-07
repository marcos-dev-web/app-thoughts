const express = require('express');
const path = require('path');

const app = express();

const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve('src', 'public')));
app.use(express.static(path.resolve('src', 'public', 'pages')));
app.use(router);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening at [${PORT}]`);
})