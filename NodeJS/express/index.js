import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(`Hello World from route: (${req.url})`);
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);

// Tutorial: https://www.robinwieruch.de/node-js-express-tutorial/