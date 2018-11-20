const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});
const server = app.listen(process.env.PORT || 8080, ()=> {
  console.log('listening on port ', server.address().port);
});