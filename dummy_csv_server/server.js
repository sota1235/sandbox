const express = require('express');
const compression = require('compression');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const app = express();

app.use(compression({
  level: 6,
}));

app.get('/', (req, res) => {
  res.send('working');
});

app.get('/csv', (req, res) => {
  res.setHeader('content-disposition', 'attachment; filename=data.csv');
  res.setHeader('content-type', 'text/csv; charset=UTF-8');
  const csv = readFileSync(resolve(__dirname, 'dummy.csv'));
  res.send(csv);
});

app.get('/liveness', (_, res) => {
  res.status(201);
  res.send();
})

app.listen(11235, () => {
  console.log('server listening on 11235');
});