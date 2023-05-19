const express = require('express');
const app = express();

app.use(express.json());

let operationCode = 1;

app.route('/bhfl')
  .get((req, res) => {
    const response = {
      operation_code: operationCode
    };
    res.json(response);
  })
  .post((req, res) => {
    const { data } = req.body;

    const numbers = [];
    const alphabets = [];
    data.forEach(item => {
        if (!isNaN(item)) {
          numbers.push(Number(item));
        } else if (typeof item === 'string' && item.length === 1 && /^[a-zA-Z]+$/.test(item)) {
          alphabets.push(item);
        }
      });

    const response = {
      status: true,
      user_id: 'mq3732',
      email: 'mq3732@srmist.edu.in',
      roll_number: 'RA2011030010069',
      numbers: numbers,
      alphabets: alphabets
    };

    res.json(response);
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
