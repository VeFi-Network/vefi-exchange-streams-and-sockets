const express = require('express');
const app = express();

const port = parseInt(process.env.PORT || '7800');

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
