const express =  require('express');
const path = require('path');
const app = express();
const STATIC_CONTENT = '/static';

app.get('/:view', (req, res) => {
  const view = req.params['view'];
  res.sendFile(path.join(`${__dirname}${STATIC_CONTENT}/${view}`));
});
app.get('/find', (req, res) => {
  const responseText = Object.keys(req.query).reduce((message, key) => {
    return `${message} \n ${key} : ${req.query[key]},`;
  }, 'Your request includes: \n');
 console.log(req.query);
 res.send(responseText);
});
app.listen(3000, () => console.log('Running...!'));