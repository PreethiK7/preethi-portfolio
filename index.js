const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors')

const index = express();
const port = process.env.PORT || 5000;

index.use(cors())
index.options('*', cors());
index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: true }));

index.listen(port, () => console.log(`Listening on port ${port}`));


require('./routes/productRoutes')(index);

if (process.env.NODE_ENV === 'production') {
  index.use(express.static('client/build'));

  const path = require('path');
  index.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}
module.exports = index;


