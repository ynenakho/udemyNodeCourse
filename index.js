const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({bye: "WTF!!!"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);