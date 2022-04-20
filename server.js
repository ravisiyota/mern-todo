const express = require('express');
const app = express();

app.use(express.static('static'));

app.listen(3000, function() {
    console.log(`Server is running at port 3000`);
})